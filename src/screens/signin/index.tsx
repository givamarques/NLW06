// arquivo tsx e nao ts pois tem componentes sendo renderizados
//se usasse export default teria de ser importado no appjs sem chaves. muda a forma de importacao

import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import { styles } from "./styles";

export function SignIn(){
    const [text, setText] = useState('');

    return(
        <View style={ styles.container }>
            <Text><h1>Hello, again</h1></Text>
            
            <TextInput 
            style={ styles.input }
            onChangeText={setText}
            />

            <Text>
                Você digitou: { text }
            </Text>

        </View>
    )    
}