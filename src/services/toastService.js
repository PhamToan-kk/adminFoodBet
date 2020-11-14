import { Keyboard } from 'react-native';
import { colors } from "../styles";
export const toastService = {
    showOffer: ({ model, onConfirm, onCancel }) => {
        if (window.showOfferContent) {
            Keyboard.dismiss();
            window.showOfferContent({ model, onConfirm, onCancel });
        }
    },
    alert: ({ title, content, isTouchOutside, onPress }) => {
        if (window.showAlert) {
            Keyboard.dismiss();
            window.showAlert({ title, content, isTouchOutside, onPress });
        }
    },
    error: ({ title, content }) => {
        if (window.showAlert) {
            Keyboard.dismiss();
            window.showAlert({ title, content, color: colors.torchRed });
        }
    },
    info: ({ title, content }) => {
        if (window.showAlert) {
            Keyboard.dismiss();
            window.showAlert({ title, content, color: colors.primary });
        }
    },
    success: ({ title, content }) => {
        if (window.showAlert) {
            Keyboard.dismiss();
            window.showAlert({ title, content, color: colors.green });
        }
    },
    warning: ({ title, content }) => {
        if (window.toast) {
            Keyboard.dismiss();
            window.toast({
                type: "alert",
                title,
                content,
                kind: colors.warningBackground
            });
        }
    },
    confirm: ({ title, content, onConfirm, onCancel, buttonColor }) => {
        if (window.showConfirm) {
            Keyboard.dismiss();
            window.showConfirm({ title, content, onConfirm, onCancel, buttonColor });
        }
    },
    childComponent: ({
        title,
        content,
        onCancel,
        onConfirm,
        showTitle = true,
        closeOnTouchOutside = true,
        style
    }) => {
        if (window.openChildrenModal) {
            Keyboard.dismiss();
            window.openChildrenModal({
                title,
                content,
                onCancel,
                onConfirm,
                showTitle,
                closeOnTouchOutside,
                style
            });
        }
    },
    bottomSheetComponent: ({
        content,
        style
    }) => {
        if (window.openBottomSheetModal) {
            Keyboard.dismiss();
            window.openBottomSheetModal({
                content,
                style
            });
        }
    },
    bottomModal: ({ title, content, footer, autoHeight }) => {
        if (Platform.OS === 'ios') {
            Keyboard.dismiss();
            window.showBottomModalIOS({ title, content, footer, autoHeight });
        } else {
            Keyboard.dismiss();
            window.showBottomModalAndroid({ title, content, footer, autoHeight });
        }
    },
    loading: () => {
        if (window.loading) {
            Keyboard.dismiss();
            window.loading();
        }
    },
    unloading: () => {
        if (window.unloading) {
            Keyboard.dismiss();
            window.unloading();
        }
    },
    close: () => {
        if (window.toastoff) {
            Keyboard.dismiss();
            window.toastoff();
        }
        if (window.closeChildrenModal) {
            Keyboard.dismiss();
            window.closeChildrenModal();
        }
        if (window.closeBottomSheetModal) {
            Keyboard.dismiss();
            window.closeBottomSheetModal();
        }
        if (window.closeBottomSheetModal) {
            Keyboard.dismiss();
            window.closeBottomSheetModal();
        }
        if (window.closeBottomModalIOS) {
            Keyboard.dismiss();
            window.closeBottomModalIOS();
        }
        if (window.closeBottomModalAndroid) {
            Keyboard.dismiss();
            window.closeBottomModalAndroid();
        }
    }
};