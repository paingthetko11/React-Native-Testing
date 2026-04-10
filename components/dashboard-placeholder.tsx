import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type DashboardPlaceholderScreenProps = {
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  tint: string;
};

export function DashboardPlaceholderScreen({
  title,
  description,
  iconName,
  tint,
}: DashboardPlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={[styles.iconWrap, { backgroundColor: `${tint}20` }]}>
            <MaterialIcons color={tint} name={iconName} size={34} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eff4fb',
  },
  container: {
    flex: 1,
    backgroundColor: '#eff4fb',
    paddingHorizontal: 20,
    paddingVertical: 28,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 36,
    alignItems: 'center',
    shadowColor: '#173a76',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 6,
  },
  iconWrap: {
    width: 76,
    height: 76,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#182131',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#6c7b90',
  },
});
