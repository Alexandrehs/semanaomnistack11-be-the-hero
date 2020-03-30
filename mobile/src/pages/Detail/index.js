import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';
import style from './style';
import logoImage from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Ola seu abestadu estamos testando o negocio aqui blz?';

    function navigateBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Heroi da Apae',
            recipients: ['echo.alexandre@gmail.com'],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5534992991614&text=${message}`);
    }
    
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImage} />
                
                <TouchableOpacity
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={28} color="#e02041"/>
                </TouchableOpacity>
            </View>

            <View style={style.incidents}>
                <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG</Text>
                <Text style={style.incidentValue}>Apae</Text>

                <Text style={style.incidentProperty}>CASO</Text>
                <Text style={style.incidentValue}>Titulo do caso</Text>

                <Text style={style.incidentProperty}>VALOR</Text>
                <Text style={style.incidentValue}>210,00</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato.</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={sendEmail}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}