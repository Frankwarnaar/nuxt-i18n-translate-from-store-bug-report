export const actions = {
  alertTranslation(context) {
    window.alert(this.app.$t('translation_key'))
  }
}
