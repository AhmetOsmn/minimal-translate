# Minimal Translate - User Guide

Minimal Translate is a fast, minimal, and powerful desktop translation application. Access instant translation from anywhere with a global hotkey. Get professional results with AI-powered translation engines.

## Table of Contents

- [Overview](#overview)
- [Main Features](#main-features)
- [Application Screens](#application-screens)
  - [Translation Window](#translation-window)
  - [Settings Window](#settings-window)
    - [How to Use](#how-to-use)
    - [AI Models](#ai-models)
    - [API Keys](#api-keys)
    - [Translation Settings](#translation-settings)
    - [Keyboard Shortcuts](#keyboard-shortcuts)
    - [Prompt Settings](#prompt-settings)
    - [Notifications](#notifications)
  - [Sidebar Features](#sidebar-features)
  - [System Tray](#system-tray)

## Overview

Minimal Translate runs in the background and stays accessible in the system tray. With a global keyboard shortcut, you can instantly open the translation window from any application and translate text seamlessly.

## Main Features

- **Instant Access**: Global hotkey (`Ctrl+Shift+T` / `Cmd+Shift+T`) opens translation window from anywhere
- **Multiple AI Support**: OpenAI (GPT-4, GPT-4o-mini), Google Gemini, and OpenRouter with access to hundreds of models
- **Auto Copy**: Translation results are automatically copied to clipboard
- **100+ Languages**: Support for over 100 target languages
- **Refinement Mode**: Automatic improvement for English translations
- **Custom Prompts**: Create and use your own translation prompts (up to 5)
- **Customizable Shortcuts**: Set your preferred keyboard shortcut combination
- **Dark Mode**: Eye-friendly dark theme support
- **Multi-language UI**: English and Turkish interface support
- **Cross-Platform**: Windows, macOS, and Linux support
- **Secure Storage**: API keys encrypted using system secure storage

## Application Screens

### Translation Window

The translation window is the main interface where you perform translations. It can be opened from anywhere using the global keyboard shortcut.

#### Opening the Translation Window

- Press the global hotkey (`Ctrl+Shift+T` on Windows/Linux or `Cmd+Shift+T` on macOS) from any application
- The window will appear in the center of your screen with focus on the text input

#### Translation Window Features

**Text Input Area**

- Click or focus on the text area to start typing
- Paste text using `Ctrl+V` / `Cmd+V`
- The textarea automatically expands as you type (maximum 150px height)

**Model Selection**

- Click on the model name badge (e.g., "GPT", "Gemini", "OpenRouter") in the header
- A dropdown menu appears showing available models:
  - **GPT**: OpenAI models
  - **Gemini**: Google Gemini models
  - **OpenRouter**: OpenRouter models
- Select a model to switch translation service
- The selected model is saved automatically

**Target Language Display**

- Shows the current target language code (e.g., "EN", "TR", "DE") next to the model indicator
- The target language is set in Translation Settings

**Refinement Mode Toggle**

- Look for the ✨ icon button in the header
- Click to toggle refinement mode on/off
- When active, the icon shows a checkmark (✨✓)
- Refinement mode improves English translations for better grammar and expression
- The setting is saved automatically

**Translation Process**

1. Enter or paste the text you want to translate
2. Press `Enter` (without Shift) to start translation
   - Or click the Enter key indicator that appears when text is entered
3. A loading spinner appears in the header during translation
4. On success:
   - A green checkmark appears
   - "Copied to clipboard!" message is displayed
   - The translation is automatically copied to your clipboard
   - Window closes automatically after 600ms
5. On error:
   - A red X icon appears
   - Error message is displayed below the input area
   - If the error is related to API keys, a link to open Settings is provided

**Settings Access**

- Click the gear icon (⚙️) in the top-right corner of the header
- Opens the Settings window
- Useful for quick access to API keys or other settings

**Closing the Window**

- Press `Escape` key
- Click outside the window
- Window closes automatically after successful translation

#### Keyboard Shortcuts in Translation Window

- `Enter`: Start translation (when text is entered)
- `Shift+Enter`: Insert new line in textarea
- `Escape`: Close translation window
- `Ctrl+V` / `Cmd+V`: Paste text into input

---

### Settings Window

The Settings window provides access to all application configuration options. It can be opened from the system tray icon or from the translation window.

#### Opening Settings

- Right-click on the system tray icon and select "Settings"
- Click the gear icon (⚙️) in the translation window
- Settings window will open with the sidebar on the left

#### Settings Window Structure

The settings window consists of:

- **Top Bar**: Draggable title bar (on macOS, space for traffic light buttons)
- **Sidebar**: Navigation menu on the left with all setting pages
- **Main Content**: Page content on the right side

---

### How to Use

This is the default page when Settings opens. It provides a quick guide on how to use Minimal Translate.

#### Features

**4-Step Usage Guide**

1. **Use the Shortcut**: Shows your current keyboard shortcut (e.g., `⌘/Ctrl + ⇧ + T`)
2. **Type the Text**: Instructions to enter text in the translation window
3. **Press Enter**: How to trigger translation
4. **Paste**: How to use the translated text that's copied to clipboard

**Tips Section**

- Press `ESC` to close the translation window
- Click outside the window to close it
- Translation is automatically copied to clipboard when completed
- Source language is automatically detected

---

### AI Models

This page allows you to select and configure the AI translation service.

#### Model Selection

Three main models are available:

**OpenAI (GPT-4)**

- Select the card to use OpenAI models
- Requires OpenAI API key
- Best for: Contextual translation, understanding idioms and nuances
- Model selection badge: 🤖

**Google Gemini**

- Select the card to use Google Gemini
- Requires Google Gemini API key
- Best for: Advanced AI translation, ideal for complex texts
- Model selection badge: ✨

**OpenRouter**

- Select the card to use OpenRouter
- Requires OpenRouter API key
- Best for: Access to many AI models with a single API, free models available
- Model selection badge: 🌐

#### OpenRouter Model Selection

When OpenRouter is selected, additional options appear:

**Model Picker**

- Shows currently selected model (e.g., "openai/gpt-4o-mini")
- Click to see dropdown with available models
- Models are loaded from OpenRouter API
- Search bar to filter models by name
- "Free" filter button to show only free models
- "View all models" link to see complete list
- Each model shows its pricing status (Free/Paid)

**Custom Model ID**

- If your desired model is not in the list, enter a custom model ID
- Format: `provider/model-name` (e.g., `openai/gpt-4o-mini`)
- Click "Save" to use the custom model

**Actions**

- Selecting a model saves it automatically
- Success message appears: "Model saved!"
- If model list fails to load, "Retry" button appears

**Note**

- Ensure your API key for the selected model is defined in the API Keys section

---

### API Keys

This page allows you to manage API keys for all translation services. API keys are stored encrypted using your system's secure storage.

#### API Key Management

For each service (OpenAI, Gemini, OpenRouter):

**Entering API Key**

1. Click in the input field for the service
2. Enter your API key
3. The field shows masked characters by default (password type)
4. Click the eye icon to toggle visibility

**Getting API Keys**

- Click the "Get API key" link next to each service name
- Opens the official API key page in your browser:
  - OpenAI: https://platform.openai.com/api-keys
  - Gemini: https://makersuite.google.com/app/apikey
  - OpenRouter: https://openrouter.ai/keys

**Testing API Keys**

- Click the "Test" button next to the input field
- Tests the connection with the entered API key
- Shows success message: "Connection successful!" if valid
- Shows error message if invalid or connection fails
- Test result clears when you modify the key

**Saving API Keys**

- Click the "Save" button at the bottom right
- All entered API keys are saved at once
- Success message: "Saved!" appears for 3 seconds
- Keys are encrypted using system secure storage (Keychain/Credential Store)

**Security Note**

- API keys are encrypted using your operating system's secure storage
- They are never sent to our servers
- Used only locally for translation requests
- Each platform uses its native secure storage:
  - macOS: Keychain
  - Windows: Credential Store
  - Linux: Secret Service API

---

### Translation Settings

This page allows you to customize translation behavior and target language.

#### Target Language Selection

**Language Picker**

- Search bar at the top: Type to search for a language
- Dropdown list shows all available languages (100+)
- Each language shows:
  - Flag emoji
  - Language name in English
  - Language name in native script (if applicable)
- Select a language to set as target
- Default language is English (EN)

**Popular Languages**

- Common languages are easily accessible in the list
- Languages are organized alphabetically

#### Refinement Mode

**Toggle Switch**

- Title shows: "[Language] Refinement" (e.g., "English Refinement")
- Description explains the feature
- Toggle to enable/disable refinement mode
- When active:
  - Switch shows green indicator
  - Status label shows "Active"
- When inactive:
  - Switch shows gray indicator
  - Status label shows "Inactive"

**What Refinement Does**

- When active, translations to the selected language are improved
- AI model not only translates but also improves grammar and expression
- Results in smoother, more natural translations

#### Translation Example

**Example Display**

- Shows a sample input text
- Shows the translation result in the selected target language
- Updates automatically when target language changes
- Helps you understand the translation quality

---

### Keyboard Shortcuts

This page allows you to customize the global keyboard shortcut for opening the translation window.

#### Current Shortcut Display

**Active Shortcut Card**

- Shows your current shortcut in visual format
- Displays modifier keys and main key (e.g., `⌘ + ⇧ + T`)
- Green checkmark with "Active" status indicator

#### Changing Shortcut

**Recording New Shortcut**

1. Click "Set New Shortcut" button
2. Recording area becomes highlighted
3. Press your desired key combination:
   - Must include at least one modifier (Ctrl, Cmd, Alt, Shift)
   - Must include a regular key
   - Example: `Ctrl+Shift+T`
4. Pressed keys appear in real-time in the recording area
5. Click "Save" to confirm
6. Click "Cancel" to abort recording

**Saving Shortcut**

- After recording, click "Save" button
- Shortcut is validated and registered
- Success message: "Shortcut saved successfully!"
- Global shortcut is updated immediately
- Old shortcut is unregistered automatically

**Validation**

- Shortcut must have at least 2 keys (one modifier + one key)
- System prevents conflicts with critical system shortcuts
- If shortcut is invalid, error message appears

#### Tips

- Use at least one modifier key (Ctrl, Cmd, Alt, Shift)
- Choose a combination that doesn't conflict with system shortcuts
- Recommended: `Ctrl+Shift+T` or `Cmd+Shift+T`

---

### Prompt Settings

This page allows you to create and manage custom translation prompts. You can save up to 5 prompts.

#### Prompt Selection

**Prompt List**

- Shows all saved prompts at the top
- Each prompt card displays:
  - Prompt name
  - Preview of prompt content (first 100 characters)
  - Selected indicator (checkmark) if currently active
- Click on a prompt card to select it
- Selected prompt will be used for all translations
- "None" option to use default system prompt

#### Prompt Management

**Adding New Prompt**

1. Click "Add New Prompt" button (if less than 5 prompts exist)
2. Modal dialog opens
3. Enter prompt name (e.g., "Technical Documentation")
4. Enter prompt content (the actual prompt text)
5. Click "Save"
6. Prompt is added to the list

**Editing Prompt**

1. Click the edit icon (pencil) on any prompt card
2. Modal dialog opens with existing values
3. Modify name or content
4. Click "Save"
5. Changes are saved

**Deleting Prompt**

1. Click the delete icon (trash) on any prompt card
2. Confirmation dialog appears: "Delete Prompt"
3. Shows prompt name in confirmation message
4. Click "Confirm" to delete (action cannot be undone)
5. Click "Cancel" to abort

**Limits**

- Maximum 5 prompts can be saved
- When limit is reached, "Maximum 5 prompts can be saved" message appears
- "Add New Prompt" button is disabled when limit is reached

**Empty State**

- If no prompts are saved, empty state message is shown
- Encourages creating first prompt

---

### Notifications

This page allows you to manage notification settings for translation completion.

#### Send Notifications

**Toggle Switch**

- Title: "Send Notifications"
- Description: "When active, a notification will be sent when translation is completed."
- Toggle to enable/disable notifications
- When active:
  - Switch shows green indicator
  - Status label shows "Active"
- When inactive:
  - Switch shows gray indicator
  - Status label shows "Inactive"

#### Notification Permission

**Permission Warning**

- If notifications are enabled but permission is not granted, a warning appears
- Shows current permission status:
  - "Checking permission" (while checking)
  - "Permission granted" (if granted)
  - "Permission denied" (if denied)
  - "Permission not granted yet" (if default)

**Granting Permission**

- Click "Open Notification Settings" button
- Opens system notification settings for the app
- Instructions provided for enabling notifications:
  1. Open System Preferences
  2. Go to Notifications section
  3. Find Minimal Translate app
  4. Enable notifications

**Automatic Checking**

- Permission status is checked automatically every 3 seconds when notifications are enabled
- Updates permission status without manual refresh

**Permission Denied State**

- If permission is denied, instructions are shown to enable it manually
- Cannot send notifications until permission is granted

---

### Sidebar Features

The sidebar in the Settings window provides navigation and additional controls.

#### Navigation Menu

**Menu Items**

- **How to Use**: Quick start guide
- **AI Models**: Model selection and configuration
- **API Keys**: API key management
- **Translation Settings**: Language and refinement settings
- **Keyboard Shortcuts**: Shortcut customization
- **Prompt Settings**: Custom prompt management
- **Notifications**: Notification preferences

**Active Page Indicator**

- Current page is highlighted in the sidebar
- Click any menu item to navigate to that page

#### Dark Mode Toggle

**Location**: Bottom of sidebar

**Toggle Switch**

- Switch to enable/disable dark mode
- Applies to both Settings and Translation windows
- Preference is saved immediately

#### Language Toggle

**Location**: Bottom of sidebar, above dark mode toggle

**Language Options**

- English (EN)
- Turkish (TR)

**Switching Language**

- Click on current language to toggle
- UI language changes immediately
- Preference is saved automatically
- All menus, labels, and messages update to selected language

---

### System Tray

Minimal Translate runs in the background and appears in the system tray (menu bar on macOS, system tray on Windows/Linux).

#### Tray Icon

**Appearance**

- Minimal Translate icon appears in system tray
- Icon is always visible when app is running
- App runs in background (doesn't show in dock/taskbar)

#### Right-Click Menu

Right-click on the tray icon to access:

**Settings**

- Opens the Settings window
- Same as clicking the gear icon in translation window

**Quit**

- Closes the application completely
- All windows close and app exits

#### First Run

**Automatic Settings**

- On first run, if no API keys are configured, Settings window opens automatically
- Prompts you to configure at least one API key

---

## Keyboard Shortcuts Reference

### Global Shortcuts

- `Ctrl+Shift+T` (Windows/Linux) / `Cmd+Shift+T` (macOS): Open translation window
  - Customizable in Settings → Keyboard Shortcuts

### Translation Window Shortcuts

- `Enter`: Start translation (when text is entered)
- `Shift+Enter`: New line in textarea
- `Escape`: Close translation window

### General Shortcuts

- `Ctrl+V` / `Cmd+V`: Paste text (in text input areas)
- `Ctrl+C` / `Cmd+C`: Copy text (standard system shortcut)

---

## Tips and Best Practices

### Getting Started

1. **Configure API Keys First**: Before using the app, go to Settings → API Keys and add at least one API key
2. **Test Your API Keys**: Use the "Test" button to verify your API keys work
3. **Choose Your Model**: Select the AI model that best fits your needs in Settings → AI Models

### Efficient Usage

- **Remember Your Shortcut**: The default is `Ctrl+Shift+T` / `Cmd+Shift+T`, customize it if needed
- **Use Refinement Mode**: For English translations, enable refinement mode for better results
- **Custom Prompts**: Create prompts for specific use cases (technical docs, casual conversations, etc.)
- **Target Language**: Set your most-used target language in Translation Settings

### Troubleshooting

- **Translation Fails**: Check that your API key is valid and has sufficient credits/quota
- **Window Doesn't Open**: Verify your keyboard shortcut doesn't conflict with system shortcuts
- **Notifications Don't Work**: Grant notification permissions in system settings
- **API Key Error**: Go to Settings → API Keys and verify/test your API keys

---

## Support

For issues, feature requests, or contributions, please visit:

- **GitHub**: [Issues](https://github.com/AhmetOsmn/minimal-translate/issues)
- **Releases**: [Latest Release](https://github.com/AhmetOsmn/minimal-translate/releases/latest)

---

**Made with ❤️ by Ahmet Osman Sezgin**
