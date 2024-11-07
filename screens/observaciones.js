import React, { useState } from 'react';
import { View, Text, Button,  StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DetailsScreen({ route, navigation }) {
  const { name, grade, section, observation, status: initialStatus } = route.params;
  const [status, setStatus] = useState(initialStatus);

  const handleUpdate = () => {
    // Aquí se pueden implementar acciones adicionales como guardar en una base de datos
    alert('Estado actualizado');
  };

  return (
    <View style={styles.container}>
      <Text>Nombre del Estudiante: {name}</Text>
      <Text>Grado: {grade}</Text>
      <Text>Sección: {section}</Text>
      <Text>Observación: {observation}</Text>

      <Text>Estado de la Observación:</Text>
      <Picker selectedValue={status} onValueChange={setStatus} style={styles.picker}>
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>

      <Button title="Actualizar Estado" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  picker: { borderColor: '#ccc', borderWidth: 1, marginBottom: 16, borderRadius: 4 },
});
