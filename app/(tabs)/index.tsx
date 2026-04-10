import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const quickActions = [
  { label: 'Withdraw', icon: 'arrow-up-right' },
  { label: 'Deposit', icon: 'arrow-down-left' },
  { label: 'Pay', icon: 'credit-card' },
  { label: 'Scan', icon: 'qr-code' },
] as const;

const contacts = [
  { name: 'Noah', initials: 'NO', color: '#92613a' },
  { name: 'Mason', initials: 'MA', color: '#58595e' },
  { name: 'Mason', initials: 'MS', color: '#82563f' },
  { name: 'Lucas', initials: 'LU', color: '#ab775a' },
  { name: 'Ethan', initials: 'ET', color: '#94716c' },
  { name: 'Oliver', initials: 'OL', color: '#79513c' },
] as const;

const filters = ['All', 'Sent', 'Request', 'Transfer', 'Remit'] as const;

const transactions = [
  {
    name: 'Henry James',
    time: '10:30 AM',
    amount: '+$367.00',
    status: 'Receive',
    color: '#75523c',
  },
  {
    name: 'Lily Moore',
    time: '09:12 AM',
    amount: '-$908.00',
    status: 'Transfer',
    color: '#6f584a',
  },
  {
    name: 'Sophie Hall',
    time: 'Yesterday',
    amount: '-$450.00',
    status: 'Payment',
    color: '#3f4249',
  },
] as const;

function InitialAvatar({
  label,
  backgroundColor,
  size = 42,
}: {
  label: string;
  backgroundColor: string;
  size?: number;
}) {
  return (
    <View
      style={[
        styles.initialAvatar,
        { backgroundColor, width: size, height: size, borderRadius: size / 2 },
      ]}>
      <Text style={[styles.initialAvatarText, size < 40 && styles.smallAvatarText]}>
        {label}
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <InitialAvatar backgroundColor="#80553b" label="SJ" size={44} />
            <View>
              <Text style={styles.greeting}>
                Hello, Sajibur <Text style={styles.wave}>👋</Text>
              </Text>
              <Text style={styles.subGreeting}>Welcome Back</Text>
            </View>
          </View>

          <View style={styles.notificationWrap}>
            <Feather color="#d0d0d1" name="bell" size={18} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceTopRow}>
            <Text style={styles.balanceLabel}>My Balance</Text>
            <View style={styles.addCardButton}>
              <Text style={styles.addCardButtonText}>Add Card +</Text>
            </View>
          </View>

          <Text style={styles.balanceAmount}>$24,600.00</Text>
          <Text style={styles.balanceGrowth}>+22.7%</Text>

          <View style={styles.quickActionsRow}>
            {quickActions.map((action) => (
              <View key={action.label} style={styles.actionItem}>
                <View style={styles.actionIconWrap}>
                  <Feather color="#d8d8d9" name={action.icon} size={16} />
                </View>
                <Text style={styles.actionText}>{action.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.budgetRow}>
            <View>
              <Text style={styles.budgetLabel}>Left to spend</Text>
              <Text style={styles.budgetAmount}>$738</Text>
            </View>
            <View style={styles.budgetRightBlock}>
              <Text style={[styles.budgetLabel, styles.budgetLabelRight]}>
                Monthly budget
              </Text>
              <Text style={styles.budgetAmount}>$22,550.00</Text>
            </View>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill}>
              <View style={styles.progressKnob} />
            </View>
            <View style={styles.progressDots}>
              <View style={styles.progressDot} />
              <View style={styles.progressDot} />
              <View style={styles.progressDot} />
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transaction</Text>
          <Text style={styles.sectionAction}>See all</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.contactRow}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {contacts.map((contact) => (
            <View key={`${contact.name}-${contact.initials}`} style={styles.contactItem}>
              <InitialAvatar backgroundColor={contact.color} label={contact.initials} />
              <Text style={styles.contactName}>{contact.name}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={[styles.sectionHeader, styles.transactionHeader]}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          <Text style={styles.sectionAction}>See All</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.filterRow}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => {
            const active = index === 0;
            return (
              <View
                key={filter}
                style={[styles.filterChip, active && styles.filterChipActive]}>
                <Text
                  style={[styles.filterText, active && styles.filterTextActive]}>
                  {filter}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.transactionList}>
          {transactions.map((transaction, index) => (
            <View
              key={transaction.name}
              style={[
                styles.transactionRow,
                index !== transactions.length - 1 && styles.transactionDivider,
              ]}>
              <View style={styles.transactionLeft}>
                <InitialAvatar
                  backgroundColor={transaction.color}
                  label={transaction.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                  size={40}
                />
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionTime}>{transaction.time}</Text>
                </View>
              </View>

              <View style={styles.transactionAmountWrap}>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                <Text style={styles.transactionStatus}>{transaction.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#171717',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 120,
    backgroundColor: '#171717',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greeting: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: '700',
  },
  wave: {
    fontSize: 20,
  },
  subGreeting: {
    color: '#8b8b8f',
    fontSize: 14,
    marginTop: 3,
  },
  notificationWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
    borderWidth: 1,
    borderColor: '#2b2b2c',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -4,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 4,
    borderRadius: 9,
    backgroundColor: '#a8ff25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#161616',
    fontSize: 10,
    fontWeight: '800',
  },
  balanceCard: {
    backgroundColor: '#1d1d1e',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2b',
  },
  balanceTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceLabel: {
    color: '#8d8d92',
    fontSize: 13,
  },
  addCardButton: {
    backgroundColor: '#282829',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 13,
  },
  addCardButtonText: {
    color: '#d5d5d7',
    fontSize: 12,
    fontWeight: '600',
  },
  balanceAmount: {
    color: '#f7f7f7',
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1,
  },
  balanceGrowth: {
    color: '#9eff33',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 18,
  },
  actionItem: {
    alignItems: 'center',
    gap: 8,
  },
  actionIconWrap: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#272728',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#d3d3d5',
    fontSize: 12,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  budgetRightBlock: {
    alignItems: 'flex-end',
  },
  budgetLabel: {
    color: '#7f8085',
    fontSize: 12,
    marginBottom: 3,
  },
  budgetLabelRight: {
    textAlign: 'right',
  },
  budgetAmount: {
    color: '#f4f4f5',
    fontSize: 25,
    fontWeight: '700',
  },
  progressTrack: {
    height: 16,
    borderRadius: 8,
    backgroundColor: '#232324',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
  },
  progressFill: {
    position: 'absolute',
    left: 4,
    top: 4,
    bottom: 4,
    width: '34%',
    borderRadius: 6,
    backgroundColor: '#a8ff25',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 3,
  },
  progressKnob: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 14,
  },
  progressDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#4b4b4d',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#f2f2f2',
    fontSize: 24,
    fontWeight: '700',
  },
  sectionAction: {
    color: '#ababaf',
    fontSize: 15,
    fontWeight: '500',
  },
  contactRow: {
    gap: 16,
    paddingRight: 12,
  },
  contactItem: {
    alignItems: 'center',
    gap: 8,
  },
  contactName: {
    color: '#9f9fa4',
    fontSize: 12,
  },
  transactionHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  filterRow: {
    gap: 10,
    paddingBottom: 14,
    paddingRight: 18,
  },
  filterChip: {
    backgroundColor: '#252526',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  filterChipActive: {
    backgroundColor: '#a8ff25',
  },
  filterText: {
    color: '#8f8f95',
    fontSize: 13,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#1c1c1c',
  },
  transactionList: {
    backgroundColor: '#1d1d1e',
    borderRadius: 24,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#29292b',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  transactionDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#303032',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  transactionInfo: {
    marginLeft: 12,
    gap: 4,
  },
  transactionName: {
    color: '#f4f4f5',
    fontSize: 16,
    fontWeight: '600',
  },
  transactionTime: {
    color: '#76777d',
    fontSize: 12,
  },
  transactionAmountWrap: {
    alignItems: 'flex-end',
    gap: 4,
  },
  transactionAmount: {
    color: '#f4f4f5',
    fontSize: 16,
    fontWeight: '700',
  },
  transactionStatus: {
    color: '#8a8b91',
    fontSize: 12,
  },
  initialAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2d2d2e',
  },
  initialAvatarText: {
    color: '#f8f8f8',
    fontSize: 13,
    fontWeight: '700',
  },
  smallAvatarText: {
    fontSize: 12,
  },
});
