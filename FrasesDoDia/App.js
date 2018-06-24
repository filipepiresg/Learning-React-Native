import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';

const botaoPressionado = () => {
  let frases = ['Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido.',
  'Não perca a motivação só porque as coisas não estão correndo como o previsto. Adversidade gera sabedoria e é isso que levará você ao sucesso.',
  'Encare o que fez de errado com motivação, pois é isso que o ajudará a fazer certo da próxima vez.',
  'A motivação não acontece por acaso, como tudo na vida você tem de batalhar para a alcançar.',
  'Há dias que você tem que ir para a frente só com o que você tem na mão, não dá para esperar pela motivação.',
  'Às vezes um pouco de motivação ajuda a superar os maiores desafios.',
  'A vida tanto lhe pode dar o melhor como o pior, mas é você quem escolhe aquilo que vai permanecer ou ficar para trás.',
  'Assim como os pássaros, precisamos aprender a superar os desafios que nos são apresentados, para alçarmos voos mais altos.\n- Dirk Wolter',
  'Sonhos existem para serem realizados, por isso não olhe para trás nem escute palavras de desânimo!',
  'Se ao enfrentar os problemas da vida lhe parecer que está escalando uma montanha impossível, lembre-se que a paisagem que avistará no topo compensará qualquer esforço seu.',
  'Já experimentou acreditar em você? Tente! Você não faz ideia do que é capaz.',
  'O poder está dentro de você, na sua mente, pois se acreditar que consegue não haverá obstáculo capaz de impedir o seu sucesso.',
  'Quando fazemos da união nossa principal arma na luta por um objetivo comum, vencer é uma tarefa que se torna bem mais fácil.',
  'Aquilo que você está vivendo, o peso que você está carregando, não é nada comparado à alegria que está esperando por você!',
  'Nunca desista porque encontrou um obstáculo! Os desafios são o tempero da vida!',
  'Com determinação e foco no sucesso todos os sonhos vão se realizar.',
  'Alcançar o que se deseja dá trabalho, mas não pare de lutar porque está cansado; pare apenas quando tiver triunfado!',
  'Façamos da interrupção um caminho novo. Da queda um passo de dança, do medo uma escada, do sonho uma ponte, da procura um encontro!\n- Fernando Sabino',
  'Fique tranquilo! Amanhã você vai achar um jeito de sorrir daquilo que hoje lhe fez chorar.',
  'Teste os seus limites, enfrente os seus medos e não deixe que nada impeça você de pelo menos tentar!',
  'Não se desanime diante dos obstáculos, eles são sempre uma oportunidade de você sair mais forte de uma situação.',
  'Você é mais forte e mais capaz do que imagina, e a conquista dos seus objetivos depende apenas de você!',
  'Trabalhe por uma causa, e não por aplausos. Trabalhe para expressar o melhor de você, e não para impressionar.',
  'Não importa a quantidade de adversidades que terá pela frente, pois elas não mudarão seu rumo se você tiver a determinação certa.'
];
let retorno ='';
if(frases.length > 0){
  let index = Math.floor(Math.random() * frases.length);
  retorno += frases[index]
  frases.shift(index, 1);
} else {
  retorno += 'Sem mais frases disponiveis!'
}
Alert.alert('Frase do Dia', retorno, 
  [{text:'Nova Frase', onPress: () => botaoPressionado()}
  , {text: 'OK', style: 'cancel'}], 
  { cancelable: false } );
}
export default class App extends React.Component {
  render() {
    const { container, botao, rodape, conteudo, citacao } = styles;
    return (
      <View style={ container }>
      <View style = {conteudo}>
      <Image source={ require('./src/img/logo.png') } />
      <TouchableOpacity style={ botao } onPress={ botaoPressionado }>
      <Text style={ {fontSize: 16, textAlign:'center',fontWeight:'bold', color:'#fff'} }> 
      Nova Frase
      </Text>
      </TouchableOpacity>
      </View>
      <View style={ rodape }>
      <Text style={ citacao }> Frases retiradas do site:</Text>
      <Text style ={ [citacao, {fontWeight:'bold', color:'green'}]}> mundodasmensagens.com </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  citacao:{
    justifyContent: 'flex-end',
    color:'gray', 
    fontSize:10
  },
  conteudo:{
    flex: 9,
    alignItems: 'center',
    justifyContent:'center'
  },
  botao:{
    marginTop: 20,
    paddingVertical:10,
    paddingHorizontal:40,
    backgroundColor:'green',
    shadowOpacity:0.35,
    shadowColor:'#000',
    shadowOffset:{width:5 , height:5}
  },
  rodape:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  }
});
