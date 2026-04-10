import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'] as const;

function CurrencyField({
  label,
  amount,
  code,
  accent,
}: {
  label: string;
  amount: string;
  code: string;
  accent: string;
}) {
  return (
    <View style={styles.fieldBlock}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldRow}>
        <Text style={styles.fieldAmount}>{amount}</Text>
        <View style={styles.currencyTag}>
          <View style={[styles.currencyFlag, { backgroundColor: accent }]} />
          <Text style={styles.currencyCode}>{code}</Text>
          <Feather color="#7c7c81" name="chevron-down" size={14} />
        </View>
      </View>
    </View>
  );
}

export default function ExchangeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.roundButton}>
            <Feather color="#d4d4d6" name="chevron-left" size={18} />
          </View>
          <Text style={styles.headerTitle}>Exchange</Text>
          <View style={styles.roundButton}>
            <Feather color="#d4d4d6" name="more-horizontal" size={18} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Currency Details</Text>

          <View style={styles.fieldCard}>
            <CurrencyField accent="#e25c58" amount="1000.00" code="USD" label="From" />

            <View style={styles.fieldDivider} />

            <CurrencyField accent="#0ac06f" amount="121606.50" code="BDT" label="To" />
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Network Fees</Text>
            <Text style={styles.metaValue}>2.59 USD</Text>
          </View>
        </View>

        <View style={styles.rateCard}>
          <View>
            <Text style={styles.rateLabel}>Rate</Text>
            <Text style={styles.rateTime}>Feb 10, 12:20 PM UTC</Text>
          </View>
          <View style={styles.rateValueWrap}>
            <Text style={styles.rateValue}>1 USD = 121.61 BDT</Text>
            <Text style={styles.rateChange}>▲ +11.15% (1Y)</Text>
          </View>
        </View>

        <View style={styles.keypad}>
          {keypad.map((key) => (
            <View key={key} style={styles.keypadButton}>
              {key === 'backspace' ? (
                <MaterialIcons color="#b8b8bc" name="backspace" size={20} />
              ) : (
                <Text style={styles.keypadText}>{key}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.ctaButton}>
          <Text style={styles.ctaText}>Exchange Money</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#171717',
  },
  screen: {
    flex: 1,
    backgroundColor: '#171717',
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#202021',
    borderWidth: 1,
    borderColor: '#2c2c2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#f4f4f5',
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#1c1c1d',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2a2a2b',
    padding: 14,
  },
  cardTitle: {
    color: '#e9e9ea',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  fieldCard: {
    backgroundColor: '#202021',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2a2a2b',
    padding: 12,
  },
  fieldBlock: {
    gap: 8,
  },
  fieldLabel: {
    color: '#8b8b90',
    fontSize: 12,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldAmount: {
    color: '#f4f4f5',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  currencyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#29292b',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  currencyFlag: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ffffff10',
  },
  currencyCode: {
    color: '#d8d8da',
    fontSize: 13,
    fontWeight: '600',
  },
  fieldDivider: {
    height: 1,
    backgroundColor: '#2f2f31',
    marginVertical: 12,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  metaLabel: {
    color: '#8b8b90',
    fontSize: 13,
  },
  metaValue: {
    color: '#efefef',
    fontSize: 14,
    fontWeight: '600',
  },
  rateCard: {
    marginTop: 14,
    backgroundColor: '#1c1c1d',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2a2a2b',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rateLabel: {
    color: '#eeeeef',
    fontSize: 15,
    fontWeight: '600',
  },
  rateTime: {
    color: '#808086',
    fontSize: 11,
    marginTop: 4,
  },
  rateValueWrap: {
    alignItems: 'flex-end',
    gap: 4,
  },
  rateValue: {
    color: '#d9d9db',
    fontSize: 12,
  },
  rateChange: {
    color: '#a8ff25',
    fontSize: 12,
    fontWeight: '700',
  },
  keypad: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  keypadButton: {
    width: '31.5%',
    aspectRatio: 1.65,
    backgroundColor: '#232324',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2b2b2d',
  },
  keypadText: {
    color: '#efeff0',
    fontSize: 32,
    fontWeight: '500',
  },
  ctaButton: {
    marginTop: 18,
    backgroundColor: '#a8ff25',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
  },
  ctaText: {
    color: '#181818',
    fontSize: 16,
    fontWeight: '800',
  },
});
