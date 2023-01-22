const form = document.querySelector('form') //formulario numa variavel
const  nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')
/*constante contando o botao do header*/

button.addEventListener('click',add)/*funçao que adiciona um "ouvidor"*/
form.addEventListener("change",save)


function add(){
     const today = new Date().toLocaleString('pt-br').slice(0,-5)

    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Dia já incluso!')
        return
    }
    alert('Dia adicionado com sucesso!✅🚀')
    nlwSetup.addDay(today)
}//

function save(){

    localStorage.setItem('nlwSetupHabits', JSON.stringify(nlwSetup.data))//essa função guarda dados no navegador. a outra tranforma objeto em string

}

const data = JSON.parse(localStorage.getItem("nlwSetupHabits")) ||{}//vai pegar a string e transformar em objeto
nlwSetup.setData(data)
nlwSetup.load()