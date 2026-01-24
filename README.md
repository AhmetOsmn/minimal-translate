# LLM Prompter - User Guide

![Demo](assets/review.gif)

LLM Prompter is a fast, powerful desktop application for generating AI-optimized prompts. Access instant prompt generation from anywhere with a global hotkey. Create custom prompt templates, or use the default behavior to generate English prompts from any language input.

## Table of Contents

- [Overview](#overview)
- [Main Features](#main-features)
- [Application Screens](#application-screens)
  - [Prompt Window](#prompt-window)
  - [Settings Window](#settings-window)
    - [How to Use](#how-to-use)
    - [AI Models](#ai-models)
    - [API Keys](#api-keys)
    - [Output Settings](#output-settings)
    - [Keyboard Shortcuts](#keyboard-shortcuts)
    - [Prompt Templates](#prompt-templates)
    - [Notifications](#notifications)
  - [Sidebar Features](#sidebar-features)
  - [System Tray](#system-tray)

## Overview

LLM Prompter runs in the background and stays accessible in the system tray. With a global keyboard shortcut, you can instantly open the prompt window from any application and generate optimized prompts seamlessly.

**Default Behavior**: When no custom template is selected, the app automatically converts your input to English, making it perfect for non-English speakers working with English-based LLMs.

## Main Features

- **Instant Access**: Global hotkey (`Ctrl+Shift+T` / `Cmd+Shift+T`) opens prompt window from anywhere
- **Multiple AI Support**: OpenAI (GPT-4, GPT-4o-mini), Google Gemini, and OpenRouter with access to hundreds of models
- **Custom Prompt Templates**: Create and save reusable prompt templates for different use cases
- **Smart Default**: Automatically generates English prompts when no template is selected
- **Auto Copy**: Generated prompts are automatically copied to clipboard
- **100+ Languages**: Support for input and output in over 100 languages
- **Refinement Mode**: Automatic optimization for prompts in any target language
- **Customizable Shortcuts**: Set your preferred keyboard shortcut combination
- **Dark Mode**: Eye-friendly dark theme support
- **Multi-language UI**: English and Turkish interface support
- **Cross-Platform**: Windows, macOS, and Linux support
- **Secure Storage**: API keys encrypted using system secure storage

## Application Screens

### Prompt Window

The prompt window is the main interface where you generate AI prompts. It can be opened from anywhere using the global keyboard shortcut.

#### Opening the Prompt Window

- Press the global hotkey (`Ctrl+Shift+T` on Windows/Linux or `Cmd+Shift+T` on macOS) from any application
- The window will appear in the center of your screen with focus on the text input

#### Prompt Window Features

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
- Select a model to switch AI service
- The selected model is saved automatically

**Output Language Display**

- Shows the current output language code (e.g., "EN", "TR", "DE") next to the model indicator
- The output language is set in Output Settings

**Refinement Mode Toggle**

- Look for the ✨ icon button in the header
- Click to toggle refinement mode on/off
- When active, the icon shows a checkmark (✨✓)
- Refinement mode optimizes prompts in the selected output language for better clarity and effectiveness
- The setting is saved automatically

**Prompt Generation Process**

1. Enter or paste the text you want to convert into a prompt
2. Press `Enter` (without Shift) to start generation
   - An Enter key indicator (↵) appears when text is entered, but it's only visual - you must press the Enter key to generate
3. A loading spinner appears in the header during processing
4. On success:
   - A green checkmark appears
   - "Copied to clipboard!" message is displayed
   - The generated prompt is automatically copied to your clipboard
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
- Window closes automatically after successful generation

#### Keyboard Shortcuts in Prompt Window

- `Enter`: Generate prompt (when text is entered)
- `Shift+Enter`: Insert new line in textarea
- `Escape`: Close prompt window
- `Ctrl+V` / `Cmd+V`: Paste text into input

---

### Settings Window

The Settings window provides access to all application configuration options. It can be opened from the system tray icon or from the prompt window.

#### Opening Settings

- Right-click on the system tray icon and select "Settings"
- Click the gear icon (⚙️) in the prompt window
- Settings window will open with the sidebar on the left

#### Settings Window Structure

The settings window consists of:

- **Top Bar**: Draggable title bar (on macOS, space for traffic light buttons)
- **Sidebar**: Navigation menu on the left with all setting pages
- **Main Content**: Page content on the right side

---

### How to Use

This is the default page when Settings opens. It provides a quick guide on how to use LLM Prompter.

#### Features

**4-Step Usage Guide**

1. **Use the Shortcut**: Shows your current keyboard shortcut (e.g., `⌘/Ctrl + ⇧ + T`)
2. **Type the Text**: Instructions to enter text in the prompt window
3. **Press Enter**: How to trigger prompt generation
4. **Paste**: How to use the generated prompt that's copied to clipboard

**Tips Section**

- Press `ESC` to close the prompt window
- Click outside the window to close it
- Generated prompts are automatically copied to clipboard when completed
- Source language is automatically detected

---

### AI Models

This page allows you to select and configure the AI service for prompt generation.

#### Model Selection

Three main models are available:

**OpenAI (GPT-4)**

- Select the card to use OpenAI models
- Requires OpenAI API key
- Best for: Contextual understanding, nuanced prompt generation
- Model selection badge: 🤖

**Google Gemini**

- Select the card to use Google Gemini
- Requires Google Gemini API key
- Best for: Advanced AI processing, ideal for complex prompts
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

This page allows you to manage API keys for all AI services. API keys are stored encrypted using your system's secure storage.

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
- Used only locally for AI API requests
- Each platform uses its native secure storage:
  - macOS: Keychain
  - Windows: Credential Store
  - Linux: Secret Service API

---

### Output Settings

This page allows you to customize prompt generation behavior and output language.

#### Output Language Selection

**Language Picker**

- Search bar at the top: Type to search for a language
- Dropdown list shows all available languages (100+)
- Each language shows:
  - Language name (e.g., "English", "Turkish")
- Select a language to set as output
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

- When active, generated prompts in the selected language are optimized
- AI model not only generates but also improves clarity and effectiveness
- Results in more precise, better-structured prompts

#### Example Display

**Example Display**

- Shows a sample input text
- Shows the generated result in the selected output language
- Updates automatically when output language changes
- Helps you understand the generation quality

---

### Keyboard Shortcuts

This page allows you to customize the global keyboard shortcut for opening the prompt window.

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

### Prompt Templates

This page allows you to create and manage custom prompt templates for different use cases.

#### Understanding Prompt Templates

**What are Prompt Templates?**

Prompt templates are pre-defined prompt structures that help you generate consistent, high-quality prompts for specific tasks. Instead of manually writing the same type of prompt repeatedly, you can create a template once and reuse it with different inputs.

**Default Behavior**

When no template is selected (None), the app uses its default behavior:
- Automatically converts your input to English
- Perfect for non-English speakers working with English-based LLMs
- Simple and effective for general-purpose use

**Use Cases for Templates**

- **Technical Documentation**: Generate prompts for explaining code or technical concepts
- **Creative Writing**: Create story prompts, character descriptions, or plot ideas
- **Data Analysis**: Structured prompts for analyzing datasets or generating reports
- **Code Review**: Consistent format for code review requests
- **Meeting Summaries**: Template for converting meeting notes into structured summaries

#### Prompt Template Selection

**Template List**

- Shows all saved templates at the top
- Each template card displays:
  - Template name
  - Preview of template content (first 100 characters)
  - Selected indicator (checkmark) if currently active
- Click on a template card to select it
- Selected template will be used for all prompt generation
- "None" option to use default behavior (English conversion)

#### Template Management

**Adding New Template**

1. Click "Add New Template" button
2. Modal dialog opens
3. Enter template name (e.g., "Technical Documentation", "Story Prompt")
4. Enter template content (the actual prompt structure)
5. Click "Save"
6. Template is added to the list

**Template Content Tips**

- Use placeholders or general instructions
- Be specific about the desired output format
- Include context about the purpose
- Example: "Explain the following concept in simple terms, suitable for beginners: [user input]"

**Editing Template**

1. Click the edit icon (pencil) on any template card
2. Modal dialog opens with existing values
3. Modify name or content
4. Click "Save"
5. Changes are saved

**Deleting Template**

1. Click the delete icon (trash) on any template card
2. Confirmation dialog appears: "Delete Template"
3. Shows template name in confirmation message
4. Click "Confirm" to delete (action cannot be undone)
5. Click "Cancel" to abort

**Empty State**

- If no templates are saved, empty state message is shown
- Encourages creating first template

**Template Limit**

- Maximum 5 templates can be saved
- Message appears when limit is reached

---

### Notifications

This page allows you to manage notification settings for prompt generation completion.

#### Send Notifications

**Toggle Switch**

- Title: "Send Notifications"
- Description: "When active, a notification will be sent when prompt generation is completed."
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
  3. Find LLM Prompter app
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
- **Output Settings**: Language and refinement settings
- **Keyboard Shortcuts**: Shortcut customization
- **Prompt Templates**: Custom template management
- **Notifications**: Notification preferences

**Active Page Indicator**

- Current page is highlighted in the sidebar
- Click any menu item to navigate to that page

#### Dark Mode Toggle

**Location**: Bottom of sidebar

**Toggle Switch**

- Switch to enable/disable dark mode
- Applies to both Settings and Prompt windows
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

LLM Prompter runs in the background and appears in the system tray (menu bar on macOS, system tray on Windows/Linux).

#### Tray Icon

**Appearance**

- LLM Prompter icon appears in system tray
- Icon is always visible when app is running
- App runs in background (doesn't show in dock/taskbar)

#### Right-Click Menu

Right-click on the tray icon to access:

**Settings**

- Opens the Settings window
- Same as clicking the gear icon in prompt window

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

- `Ctrl+Shift+T` (Windows/Linux) / `Cmd+Shift+T` (macOS): Open prompt window
  - Customizable in Settings → Keyboard Shortcuts

### Prompt Window Shortcuts

- `Enter`: Generate prompt (when text is entered)
- `Shift+Enter`: New line in textarea
- `Escape`: Close prompt window

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
- **Use Refinement Mode**: Enable refinement mode for better prompt quality in any output language
- **Create Templates**: Build a library of prompt templates for your common use cases
- **Default is English**: When no template is selected, your input is automatically converted to English

### Template Creation Tips

- **Be Specific**: Clear instructions produce better results
- **Include Context**: Tell the AI what you're trying to achieve
- **Use Examples**: Show the format or style you want
- **Test and Iterate**: Try your template multiple times and refine based on results
- **Organize by Purpose**: Name templates clearly (e.g., "Code Review", "Blog Post Idea")

### Troubleshooting

- **Generation Fails**: Check that your API key is valid and has sufficient credits/quota
- **Window Doesn't Open**: Verify your keyboard shortcut doesn't conflict with system shortcuts
- **Notifications Don't Work**: Grant notification permissions in system settings
- **API Key Error**: Go to Settings → API Keys and verify/test your API keys

---

## Support

For issues, feature requests, or contributions, please visit:

- **GitHub**: [Issues](https://github.com/AhmetOsmn/llm-prompter/issues)
- **Releases**: [Latest Release](https://github.com/AhmetOsmn/llm-prompter/releases/latest)

---

**Made with ❤️ by Ahmet Osman Sezgin**
