import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

export interface HapticOptions {
    style?: ImpactFeedbackStyle;
}

export function useHaptics() {
    const triggerImpact = (style: ImpactFeedbackStyle = ImpactFeedbackStyle.Medium) => {
        impactAsync(style);
    };

    const triggerLight = () => {
        impactAsync(ImpactFeedbackStyle.Light);
    };

    const triggerMedium = () => {
        impactAsync(ImpactFeedbackStyle.Medium);
    };

    const triggerHeavy = () => {
        impactAsync(ImpactFeedbackStyle.Heavy);
    };

    return {
        triggerImpact,
        triggerLight,
        triggerMedium,
        triggerHeavy,
    };
}
