import swal from "sweetalert";

export function useFlash() {
    function flash(message, type = 'success') {
        return swal({
            title: message,
            icon: type,
            button: 'OK',
        });
    }

    return { flash };
}