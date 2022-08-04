function initMenuChangeOnRes() {
  const windowMobileRes = window.matchMedia('(max-width: 767px)')
  const menuDesktop = document.querySelector('.js-menu .menu')
  const menuMobile = document.querySelector('.js-menu .menu-mobile')
  const abrirMenu = document.querySelector('.js-menu .abrir-menu')
  const fecharMenu = document.querySelector('.js-menu .fechar-menu')

  if (windowMobileRes) {
    function isMobileWindow() {
      const removerMenu = 'remover-menu'
      const menuMobileAtivo = 'ativo'

      if (windowMobileRes.matches) {
        menuDesktop.classList.add(removerMenu)
        abrirMenu.classList.remove(removerMenu)

        abrirMenu.addEventListener('click', () => {
          menuMobile.classList.add(menuMobileAtivo)
        })

        fecharMenu.addEventListener('click', () => {
          menuMobile.classList.remove(menuMobileAtivo)
        })
      } else {
        menuDesktop.classList.remove(removerMenu)
        menuMobile.classList.remove(menuMobileAtivo)
        abrirMenu.classList.add(removerMenu)
      }
    }

    isMobileWindow()

    windowMobileRes.addEventListener('change', isMobileWindow)
  }
}

initMenuChangeOnRes()
