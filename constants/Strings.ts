// App text strings organized by feature/screen
export const Strings = {
    // Welcome/Onboarding
    welcome: {
        title: 'Messaging\neinfach gemacht',
        getStartedButton: "Los geht's",
        subtitle: 'Kommunikation war noch nie so einfach',
    },

    // Authentication
    auth: {
        title: "Gib deine Mail oder Benutzernamen ein 🙋",
        subtitle: "Als nächstes fragen wir dich nach deinem Passwort.",
        emailPlaceholder: 'max@mustermann.de',
        passwordPlaceholder: 'Passwort eingeben',
        confirmPasswordPlaceholder: 'Passwort bestätigen',
        loginButton: 'Anmelden',
        signUpButton: 'Registrieren',
        forgotPassword: 'Passwort vergessen?',
        alreadyHaveAccount: 'Bereits ein Konto? Anmelden',
        createNewAccount: 'Neues Konto erstellen',
        noAccountYet: 'Noch kein Konto? Registrieren',
        useUntis: 'Untis verwenden',
    },

    // Common UI elements
    common: {
        next: 'Weiter',
        back: 'Zurück',
        cancel: 'Abbrechen',
        save: 'Speichern',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        done: 'Fertig',
        loading: 'Wird geladen...',
        error: 'Ein Fehler ist aufgetreten',
        retry: 'Erneut versuchen',
        ok: 'OK',
    },

    // Chat/Messaging
    chat: {
        placeholder: 'Nachricht eingeben...',
        send: 'Senden',
        typing: 'schreibt...',
        online: 'Online',
        offline: 'Offline',
        newMessage: 'Neue Nachricht',
        chatList: 'Chats',
        startChat: 'Chat starten',
    },

    // Settings
    settings: {
        title: 'Einstellungen',
        profile: 'Profil',
        notifications: 'Benachrichtigungen',
        privacy: 'Datenschutz',
        about: 'Über die App',
        logout: 'Abmelden',
    },

    // Error messages
    errors: {
        networkError: 'Netzwerkfehler. Bitte versuchen Sie es erneut.',
        invalidEmail: 'Ungültige E-Mail-Adresse',
        passwordTooShort: 'Passwort muss mindestens 8 Zeichen lang sein',
        passwordsDontMatch: 'Passwörter stimmen nicht überein',
        loginFailed: 'Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Daten.',
        signUpFailed: 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.',
    },
} as const;

// Type for autocomplete and type safety
export type StringKeys = typeof Strings;
