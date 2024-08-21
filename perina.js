let inventário = []; //inventario para armazenar itens do jogador
let vida = 50; // vida do personagem durante o jogo
let checkpoint1= false  // caso o personagem tenha escolhas ruins e acabe morrendo
let checkpoint2 = true//outro checkpoint para outro escopo de código
let pontuacaoFinal= []//pontuação final do jogador


function exibirinventario(){ //função criada para visualizar o inventário
    if (inventário.length===0){
        alert("Seu inventário está sem itens ainda!");
    }else{
        alert("Seu inventário possui:"+inventário.join);
    }
}

function inicio (){ //inicio do jogo
    let escolha1 = Number(prompt("Olá querido jogador!Seja bem-vindo(a) ao Aventuras em Paris 2024. Me chamo perina, e você irá me ajudar nessa jornada até as Olimpiadas!Para iniciarmos, escolha se você quer ir para o Quênia ou para os EUA! 1-Quênia\n2-EUA"))
    if (escolha1==1){
        Quênia();
        
    }else if(escolha1==2){
        estadosUnidos();

    }
function  Quênia(){ //escolher ir para o quenia, por função é mais organizado e facil de continuar a lógica
alert("Vamos para o Quênia com um grupo pequeno!Vamos arrumar nossas coisas para irmos amanhã pela manhã ao local de encontro");
 alert("Vamos arrumar nossas coisas, precisamos pensar em alguns itens para levar em nossa mochila.");
 alert("Iremos fazer com que você escolha entre quatro itens para pôr em sua mochila!");
 let dentroMochila=Number(prompt("Escolha seus itens: 1-5 Frutas\n2-10 garrafas de àgua\n3-Roupas\n4-Fotos da família"));
 switch (dentroMochila){
    case 1:
        inventário.push("Frutas");
        alert("Sua escolha foi boa, levar algumas frutas para a sua viagem é bom");
        alert("Você ganhou 10 pontos por sua escolha!");
        pontuacaoFinal+=10
        break;
    case 2:
        inventário.push("àgua");
        alert("Se hidratar durante sua viagem é muito importante, pois será uma longa viagem");
        alert("Você ganhou 15 pontos por sua escolha!");
        pontuacaoFinal+=15
    case 3:
        inventário.push("Roupas");
        alert("As roupas não tinha tanta necessidade em levar, pois você irá começar uma nova vida daqui em diante!");
        alert("Você perdeu 10 pontos, pois sua mochila ficou muito pesada!");
        vida-=10
    break;
    case 4:
        inventário.push("Fotos")
        alert("Fotos necessarias sua tia já tem, e as outras você terá que deixar, sua mochila é pequena");
        alert("Você perdeu 20 pontos, alimentos e àgua são mais importantes!");
        vida-=10
    }
    alert("Bom, estamos no dia seguinte, agora são 7PM e estamos a caminho do nosso trasporte!");
    alert("11AM\n Estamos no caminho, e logo logo nossas vidas vão mudar para melhor");
    alert("Há uma menina que aparenta ser mais velha que eu, seu nome é Lya e ela mora na cidade vizinha!Ela está com sua avó materna!");
    alert("Fiz uma nova amiga, Lya. Ela é muito gentil e gosta de esportes igual a mim!");

    let lyaAjuda= Number(prompt("Tia Lysa:Lya está com fome, sua avó está apenas com àgua e nada mais. Você poderia dar uma de suas frutas para ela? 1-Sim, ela é sua nova amiga\n2-Não,você nao a conhece direito"));
    if(lyaAjuda==1){
        aceita;
    }else if (lyaAjuda==2){
        recusa;
    }
    function aceita(){
        inventário.push("Empatia")
        alert("Você teve empatia com o próximo, e o celo 'empatia' já está em seu inventário. Você recebeu 20 pontos por essa escolha!");
        pontuacaoFinal+=20
        alert("Você acabou de chegar no Quênia, você ficará num abrigo de refugiados Kakuma. Lya e sua vó vão ficar com você e sua tia, no abrigo.Pelo visto você arrumou uma amizade legal");
        alert("2021, Quênia\nTia Lysa e eu estamos bem, estamos na pandemia mas estamos seguras.Agora eu estou treinando junto com Lya para ela competir no campeonato estadual, eu e ela estamos competindo no atletismo ");
        alert("Lya me ensinou muitas coisas,entre elas, o gosto por esportes. Ela é muito esperta e me ensinou tudo que eu sei sobre o atletismo hoje!");
        alert("2022, Quênia\nA pandemia se foi,junto com ela minha eterna irmã Lya... Perder ela para a COVID-19 foi tão doloroso... Antes de partir, ela pediu para que eu fizesse nosso sonho se tornar realidade:Ir para as Olimpiadas!");
        alert("Isso me motivou muito a treinar, e o atletismo me ajudou a encarar o luto. Quem diria que uma fruta iria me trazer uma amizade tão boa e linda como essa!Vou me esforçar e irei até as Olimpiadas para realizar esse sonho...sozinha");
        let estadual=Number("Você venceu o campeonato estadual, e agora precisa decidir se vai permanecer na competição ou irá desistir\n1-permanecer na competição\n2-Desistir da competição");
    if (estadual==1){
        alert("Você teve uma escolha muito boa, agora seu inventário possui mais coisas:'Coragem'\n'Determinação'\n'Foco'");
        alert("Você fez uma ótima escolha, por isso,irá ganhar 30 pontos por sua escolha!");
        pontuacaoFinal+=30
        alert("2023,Orlando,Flórida\nVocê agora já é uma ótima atleta, seu centro de treinamento recebeu um treinador muito legal Janeth.Ele te convocou e agora você é treinada por ele, você se mudou para orlando e agora está no seu auge!");
        alert("Você teve um destaque nessa competição, e agora conseguiu ir para as Olimpiadas Paris 2024!");
        alert("As Olimpiadas iniciaram, e agora você está em Paris, se preparando para competir. Você sabe que esse momento é muito importante, pois você estará homenageando Lya e todos que perderam suas vidas com a Covid-19");
        let paris2024=Number(prompt("Você esta num dia antes da competição,e agora está conversando com sua tia, por facetime.\NTia Lysa:Amanhã é um grande dia para você, irá homenagear sua amiga, e irá realizar um sonho. Você irá desistir por estar nervosa? 1- Sim, é muita pressão para mim\n2-Não, irei até o final, mesmo com muita pressão em minhas costas, irei Honrar minha pequena LYA!!!"));
        if(paris2024===1){
            alert("Você desistiu de seus sonhos por nervosismo?Não batalhamos tanto para chegar aqui e você desistir não é?");
            alert("Você perdeu 20 pontos e agora irá repensar em sua escolha!");
            vida-=20
            alert("Você não irá desistir, pois está muito tarde. Amanhã é o grande dia e sua familia estará lá para te ajudar e apoiar!!");
            alert("No final, você conseguiu ir para as Olimpiadas, mas acabou ficando em 10 lugar, mas homenageou sua melhor amiga e realizou seu sonho!");
            alert("Muito orbigado(a) por me guiar até aqui!Você ajudou a mim e a Lya a realizar nosso sonho, mesmo com alguns problemas no caminho!");
            alert("Sua pontuação final foi de:"+pontuacaoFinal)
            alert("Até logo!")
        }
    }else if(estadual==2){ //checkpoint 
        alert("Você perdeu 10 pontos por desistir da competição!Você deveria repensar em sua escolha!");
        vida-=10
        if(vida<10){
        return estadual
        }
       }

       function recusa(){
        alert("Você perdeu uma futura amiga!");
        alert("Você perdeu alguns pontos, 10 pontos!");
        alert("Uma amizade é importante, você deveria ter sido mais gentil!");
        alert("Estamos em 2023, e você é uma ateta muito boa!Você mora nos Eua junto com seu treinador e esta competindo para o mundial!");
        let novaescolha=Number(prompt("Voce deseja treinar de forma intensiva? 1-sim\n2-Não"))
        if(novaescolha==1){
            alert("Você treinou muito, e se destacou no campeonato mundial! Você foi classificada para as Olimpiadas Paris 2024!");
            alert("Paris,2024\n Você chegou nas Olimpiadas 2024, e agora irá competir na parte do atletismo, você está nervosa, mas irá seguir firme e irá realizar seu sonho!");
            alert("Você chegou em 3 lugar, e ganhou a medalha de bronze!Você realizou seu sonho, e ainda ganhou uma medalha de bronze, sua primeira Olimpiadas foi incrivel");
            alert("Treinar de forma intensa foi bom! Parabens pela medalha de bronze! Obrigada por me guiar até aqui! Sua pontuação final:"+pontuacaoFinal);
            alert("Até logo!")

        }
        function estadosUnidos(){ // voce escolheu ir para os EUA
            alert("Você foi para os EUA com sua tia.Tudo ocorreu bem e agora vocês tem cidania americana!");
            alert("Você e sua tia moram em Orlando, e conseguiram se adaptar ao novo país!");
            alert("2020, orlando\nVocê descobriu que ama esportes, entre eles o atletismo. Você agora treina para as competições e está se tornando uma grande atleta!");
            let campeonatoOrlando=Number(prompt("Tia Lysa:Você está se tornando uma atleta incrível e logo logo se tornará uma atleta olimpica!Você gostaria de participar do campeonato mundial?\n 1-sim\n2-não"));
            if(campeonatoOrlando==1){ //ir para o campeonato
                alert("Você fez uma boa escolha!Você ganhou 10 pontos e o celo de 'coragem' em seu inventário");
                inventário.push("coragem");
                pontuacaoFinal+=10
                alert("Você está no rumo das Olimpiadas, e agora está competindo para o mundial antes das olimpiadas!Você se sairá muito bem!");
                alert(" Você conseguiu ser classificada para as Olimpiadas, mas foi por um fio!");
                let treinar= NUmber("Você deseja fazer treinamentos mais frequentes ou mais intensos? 1-Intensos\n2-Frequentes")
               if(treinar==1) {
                alert("Treinamentos mais frequentes é o recomendado para ti.Se continuar em tal ritmo não irá conseguir ir para o podium!");
                alert("Paris,2024\nVocê conseguiu competir, mas ficou em sétimo lugar. Conseguiu realizar seus sonhos, mas nas próximas Olimpiadas, você terá que treinar com mais frequencia!")
                alert("Obrigado(a) por jogar comigo e guiar-me nessa jornada até aqui!Você teve belas escolhas e me ajudou a encarar desafios!");
                alert("Sua pontuação final foi de:"+pontuacaoFinal)
                alert("Até logo querido(a) jogador!");
               }else if (treinar==2){ 
                alert("Treinamentos frequentes são muito bons, para ter mais resistencia e talvez mais técnicas durante as competições");
                alert("Paris,2024\nVocê teve uma ótima performace nos treiamentos. Próvavel que irá se dar bem nas provas!");
                alert("Você ficou em 2 lugar no podium!Você teve uma ótima largada, e teve bastante resistencia. Parabens por receber a medalha de prata!");
                inventário.push("Medalha de prata")
                alert("Agora seu inventário possui sua medalha de prata!")
                alert("Obrigada por me ajudar e me guiar nessa aventura. Saimos do Sudão, e agora estamos em Paris!Sua pontuação final:"+pontuacaoFinal)
                alert("Até logo!");
                }


            }else if(campeonatoOrlando==2){ // não ir para o campeonato
                alert("Você fez uma péssima escolha e talvez você não irá para as olimpiadas 2024!");
                alert("Você perdeu 5 pontos, e ganhou o celo de 'indeciso' em seu inventário");
                pontuacaoFinal-=5
                inventário.push("indeciso");
                alert("Você fez uma escolha ruim, você realmente deseja isso?");
                alert("Você irá perder suas chances de ir para Paris 2024.");
                alert("Tia Lysa: Você ficou maluca? Você realmente quer desistir de tudo?Voce irá repensar em sua escolha, ou irá se arrepender no futuro!");
                alert("Você conseguiu ir para o campeonato, pois de sua tia insistir diversas vezes!Você se destacou e conseguiu ir para as Olimpiadas de Paris 2024");
                let final=Number(prompt("Você irá para as Olimpiadas PARIS 2024!Você deseja treinar?1-Sim\n2-Não"))
                if(final==1){
                    alert("Você treinou muito, e teve um ótimo desempenho em sua prova!Você conquistou o 5 lugar em sua primeira Olimpiada!")
                    alert("Parabéns para ti, com muita dedicação chegou até aqui mesmo com muitas dificuldades!")
                    alert("Você ganhou o celo de 'inteligente' e 'focada' em seu inventário!");
                    alert("Obrigada por me ajudar até aqui!Sua pontuação final:"+pontuacaoFinal);
                    inventário.push("inteligente","focada")
                }else if(final==2){
                    alert("Você não teve dedicação e seu desempenho em sua largada foi bom, mas sua resistencia foi limitada!");
                    alert("Você conquistou o sétimo lugar!Parabéns!");
                    alert("Você ganhou um celo de 'preguiçoso' em seu inventário!Sua pontuação final:"+pontuacaoFinal);
                    alert("Obrigada por me ajudar e guiar-me até as Olimpiadas Paris 2024!Até breve!")
                }
               
                }
            }
        }
       }
    }return inicio()
    }
   

 


