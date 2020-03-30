import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import style from './style';

import logoImage from '../../assets/logo.png';

export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    async function loadIncidents() {
        const response = await api.get('incidents');
        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImage} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={style.title}>Bem vindo!</Text>
            <Text style={style.description}>
                Escolha um caso abaixo e salve o mundo.
            </Text>

            <FlatList 
                style={style.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={style.incidents} >
                        <Text style={style.incidentProperty}>ONG</Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProperty}>CASO</Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProperty}>VALOR</Text>
                        <Text style={style.incidentValue}>{incident.value}</Text>

                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text styel={style.detailsButtonText}>
                                ver mais detalhes do caso
                            </Text>
                            <Feather name="arrow-right" size={16} color="#e02040" />
                        </TouchableOpacity>
                    </View>
                )}
            
            />
        </View>
    );
}