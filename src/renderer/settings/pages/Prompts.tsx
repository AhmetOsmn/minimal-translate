import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { UserPrompt } from "../../types/user-prompt";
import { PromptSelectionList } from "../components/PromptSelectionList";
import { PromptItem } from "../components/PromptItem";
import { PromptFormModal } from "../components/PromptFormModal";
import { DeleteConfirmModal } from "../components/DeleteConfirmModal";

export default function Prompts() {
  const { t } = useTranslation();
  const [userPrompts, setUserPrompts] = useState<UserPrompt[]>([]);
  const [selectedUserPromptId, setSelectedUserPromptId] = useState<
    string | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<UserPrompt | null>(null);
  const [formName, setFormName] = useState("");
  const [formContent, setFormContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [promptToDelete, setPromptToDelete] = useState<UserPrompt | null>(
    null
  );
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const previewLength = 100;
  const canAddMore = userPrompts.length < 5;

  useEffect(() => {
    window.settingsAPI?.getConfig().then((config) => {
      if (config?.userPrompts) {
        setUserPrompts(config.userPrompts);
      }
      if (config?.selectedUserPromptId !== undefined) {
        setSelectedUserPromptId(config.selectedUserPromptId);
      }
    });
  }, []);

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const handleSelectPrompt = async (promptId: string | null) => {
    setSelectedUserPromptId(promptId);
    await window.settingsAPI?.saveConfig({ selectedUserPromptId: promptId });
  };

  const handleOpenModal = (prompt?: UserPrompt) => {
    if (prompt) {
      setEditingPrompt(prompt);
      setFormName(prompt.name);
      setFormContent(prompt.content);
    } else {
      setEditingPrompt(null);
      setFormName("");
      setFormContent("");
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPrompt(null);
    setFormName("");
    setFormContent("");
    setSaveError(null);
  };

  const handleSavePrompt = async () => {
    if (!formName.trim() || !formContent.trim()) return;

    setSaving(true);
    setSaveError(null);
    try {
      let newPrompts: UserPrompt[];
      if (editingPrompt) {
        newPrompts = userPrompts.map((p) =>
          p.id === editingPrompt.id
            ? { id: p.id, name: formName.trim(), content: formContent.trim() }
            : p
        );
      } else {
        newPrompts = [
          ...userPrompts,
          {
            id: generateId(),
            name: formName.trim(),
            content: formContent.trim(),
          },
        ];
      }

      await window.settingsAPI?.saveConfig({ userPrompts: newPrompts });
      setUserPrompts(newPrompts);
      handleCloseModal();
    } catch (error) {
      console.error("Failed to save prompt:", error);
      setSaveError(
        t("errors.saveFailed")
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (prompt: UserPrompt) => {
    setPromptToDelete(prompt);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!promptToDelete) return;

    setDeleteError(null);
    try {
      const newPrompts = userPrompts.filter(
        (p) => p.id !== promptToDelete.id
      );
      const newSelectedId =
        selectedUserPromptId === promptToDelete.id
          ? null
          : selectedUserPromptId;

      await window.settingsAPI?.saveConfig({
        userPrompts: newPrompts,
        selectedUserPromptId: newSelectedId,
      });
      setUserPrompts(newPrompts);
      setSelectedUserPromptId(newSelectedId);
      setShowDeleteConfirm(false);
      setPromptToDelete(null);
    } catch (error) {
      console.error("Failed to delete prompt:", error);
      setDeleteError(
        t("errors.deleteFailed")
      );
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
    setPromptToDelete(null);
  };

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-2">
        {t("settings.prompts.title")}
      </h2>
      <p className="text-theme-text-secondary mb-8">
        {t("settings.prompts.subtitle")}
      </p>

      <PromptSelectionList
        prompts={userPrompts}
        selectedId={selectedUserPromptId}
        previewLength={previewLength}
        onSelect={handleSelectPrompt}
      />

      {/* Prompt Management Section */}
      <div className="card p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-theme-text-primary font-medium">
            {t("settings.prompts.management")}
          </h3>
          {canAddMore && (
            <button
              onClick={() => handleOpenModal()}
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {t("settings.prompts.addNew")}
            </button>
          )}
          {!canAddMore && (
            <span className="text-xs text-theme-text-muted">
              {t("settings.prompts.maxReached")}
            </span>
          )}
        </div>

        {userPrompts.length === 0 ? (
          <div className="text-center py-8 text-theme-text-muted">
            <svg
              className="w-12 h-12 mx-auto mb-3 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <p>{t("settings.prompts.empty")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {userPrompts.map((prompt, index) => (
              <PromptItem
                key={prompt.id}
                prompt={prompt}
                isSelected={selectedUserPromptId === prompt.id}
                previewLength={previewLength}
                index={index}
                onEdit={handleOpenModal}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </div>

      <PromptFormModal
        isOpen={showModal}
        editingPrompt={editingPrompt}
        formName={formName}
        formContent={formContent}
        saving={saving}
        error={saveError}
        onNameChange={setFormName}
        onContentChange={setFormContent}
        onSave={handleSavePrompt}
        onClose={handleCloseModal}
      />

      <DeleteConfirmModal
        isOpen={showDeleteConfirm}
        itemName={promptToDelete?.name || ""}
        error={deleteError}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
}
