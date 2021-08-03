class WhatsAppConreoller {

    init(){

        this.el.inputText.on('keypress', e => {
            if(e.key === 'Enter'){
                e.preventDefault();
                this.el.btnSend.click();
            }
        });

        this.el.inputText.on('keyup', e => {
            if(this.el.inputText.innerHTML.length){
                this.el.inputPlaceholder.hide();
                this.el.btnSendMicrophone.hide();
                this.el.btnSend.show();
            }else{
                this.el.inputPlaceholder.show();
                this.el.btnSendMicrophone.show();
                this.el.btnSend.hide();
            }
        });

        this.el.btnSend.on('click', e => {
            console.log(this.el.inputText.innerHTML);
        });

        this.el.btnEmojis.on('click', e => {
            this.el.panelEmojis.toggleClass('open');
        });

        this.el.panelEmojis.querySelectorAll('.emojik').array.forEach(emoji => {
            emoji.on('click', e => {
                console.log(emoji.dataset.unicode);
            });
        });
        
        // this.el..on('click', e => {
            
        // });
    }
}