import { Notify } from 'quasar';

export default {
  success(message: string) {
    Notify.create({
      message,
      color: 'positive',
      position: 'top',
    });
  },

  error(message: string) {
    Notify.create({
      message,
      color: 'negative',
    });
  },
};
