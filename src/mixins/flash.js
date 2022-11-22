import swal from 'sweetalert';

export default {

    methods: {
        flash(message, type = 'success') {
            return swal({
                title: message,
                icon: type,
                button: 'OK',
            });
        }
    },

}