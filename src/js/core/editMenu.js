import MenuItem from "./menuItem";
import icon from '../../img/icon-34.png';

const editMenu = {
  menuItems: [
      new MenuItem({
          icon: icon,
          action: function() {
              this.style.backgroundColor = 'red';
          },
      })
  ],
  
  init: function() {
    document.body.addEventListener("click", function (e) {
        alert(e.target.id)
    })
    /*
    this.elem = document.createElement('div');
    this.elem.classList.add('edit-menu');
    for (let menuItem of this.menuItems) {
     this.elem.appendChild(menuItem.elem);   
    }
    document.body.appendChild(this.elem);
    */
  },
};

export default editMenu;