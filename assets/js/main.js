import { subscribeToHellfireClube } from './firebase/hellfire-clube.js';

(function main() {
  const txtName = document.getElementById('txtName');
  const txtEmail = document.getElementById('txtEmail');
  const txtLevel = document.getElementById('txtLevel');
  const txtCharacter = document.getElementById('txtCharacter');

  document.getElementById("btnSubscribe").addEventListener("click", async () => {
      const subscribe = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
      }

      const subscriptionId = await subscribeToHellfireClube(subscribe);
      document.getElementById('txtCadastro').innerText = (`Inscrição cadastrada com sucesso!` + ` Seu id é ${subscriptionId}`);
      
      const limpar = () => {
        document.getElementById('txtName').value = '';
        document.getElementById('txtEmail').value = '';
        document.getElementById('txtLevel').value = '';
        document.getElementById('txtCharacter').value = '';
        document.getElementById('txtName').focus();
      }
      limpar();
    });
})();
