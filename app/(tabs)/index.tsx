import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const contacts = [
  { name: 'Anne', initials: 'AN', color: '#f6c17b' },
  { name: 'Kate', initials: 'KA', color: '#2d2f36' },
  { name: 'Edward', initials: 'ED', color: '#f3d37a' },
  { name: 'Philip', initials: 'PH', color: '#d5dced' },
  { name: 'Edo', initials: 'EO', color: '#8dc4ff' },
];

const quickActions = [
  {
    label: 'Add money',
    icon: 'add',
    iconColor: '#2c7dff',
    iconBackground: '#e6f0ff',
  },
  {
    label: 'Send Money',
    icon: 'north-east',
    iconColor: '#f1a643',
    iconBackground: '#fff1de',
  },
  {
    label: 'More',
    icon: 'grid-view',
    iconColor: '#95a3ba',
    iconBackground: '#f1f4f9',
  },
] as const;

const transactions = [
  {
    title: 'Food',
    date: '14 April 2019',
    amount: '$450',
    icon: 'restaurant',
    accent: '#ffb347',
  },
  {
    title: 'Medicine',
    date: '14 April 2019',
    amount: '$29',
    icon: 'medical-services',
    accent: '#44c48d',
  },
  {
    title: 'Shopping',
    date: '13 April 2019',
    amount: '$138',
    icon: 'shopping-bag',
    accent: '#7b92ff',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <View style={styles.hero}>
          <View style={styles.heroGlowLarge} />
          <View style={styles.heroGlowSmall} />

          <View style={styles.heroHeader}>
            <View style={styles.profileBubble}>
              <Text style={styles.profileBubbleText}>JT</Text>
            </View>

            <View style={styles.headerActions}>
              <View style={styles.headerIconButton}>
                <Feather color="#f6faff" name="search" size={18} />
              </View>
              <View style={styles.headerIconButton}>
                <Feather color="#f6faff" name="bell" size={18} />
              </View>
            </View>
          </View>

          <View style={styles.balanceCard}>
            <View style={styles.balanceTopRow}>
              <Text style={styles.balanceLabel}>Available Balance</Text>

              <View style={styles.currencyPill}>
                <View style={[styles.currencyDot, styles.currencyDotBlue]} />
                <View style={[styles.currencyDot, styles.currencyDotRed]} />
                <Text style={styles.currencyPillText}>USD</Text>
              </View>
            </View>

            <Text style={styles.balanceAmount}>$16,485</Text>

            <View style={styles.balanceFooter}>
              <View style={styles.inlineAction}>
                <Text style={styles.inlineActionText}>See More</Text>
                <Feather color="#8a97aa" name="chevron-right" size={14} />
              </View>

              <View style={styles.inlineAction}>
                <Text style={styles.inlineActionText}>US Dollar</Text>
                <Feather color="#8a97aa" name="chevron-down" size={14} />
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contactsCard}>
            <View style={styles.contactSearchButton}>
              <Feather color="#ffffff" name="search" size={16} />
            </View>

            <ScrollView
              contentContainerStyle={styles.contactsRow}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {contacts.map((contact) => (
                <View key={contact.name} style={styles.contactItem}>
                  <View style={[styles.avatar, { backgroundColor: contact.color }]}>
                    <Text
                      style={[
                        styles.avatarText,
                        contact.color === '#2d2f36' && styles.avatarTextLight,
                      ]}>
                      {contact.initials}
                    </Text>
                  </View>
                  <Text style={styles.contactName}>{contact.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.quickActionsCard}>
            {quickActions.map((action) => (
              <View key={action.label} style={styles.quickActionItem}>
                <View
                  style={[
                    styles.quickActionIconWrap,
                    { backgroundColor: action.iconBackground },
                  ]}>
                  <MaterialIcons
                    color={action.iconColor}
                    name={action.icon}
                    size={22}
                  />
                </View>
                <Text style={styles.quickActionLabel}>{action.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>

          <View style={styles.transactionsCard}>
            {transactions.map((transaction, index) => (
              <View
                key={transaction.title}
                style={[
                  styles.transactionRow,
                  index !== transactions.length - 1 && styles.transactionDivider,
                ]}>
                <View style={styles.transactionMain}>
                  <View
                    style={[
                      styles.transactionIconWrap,
                      { backgroundColor: `${transaction.accent}20` },
                    ]}>
                    <MaterialIcons
                      color={transaction.accent}
                      name={transaction.icon}
                      size={18}
                    />
                  </View>

                  <View style={styles.transactionCopy}>
                    <Text style={styles.transactionTitle}>{transaction.title}</Text>
                    <Text style={styles.transactionDate}>{transaction.date}</Text>
                  </View>
                </View>

                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eff4fb',
  },
  screen: {
    flex: 1,
    backgroundColor: '#eff4fb',
  },
  hero: {
    backgroundColor: '#1f6bff',
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 88,
    position: 'relative',
  },
  heroGlowLarge: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -100,
    right: -32,
  },
  heroGlowSmall: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: 40,
    right: 54,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  profileBubble: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f8d8ab',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBubbleText: {
    color: '#5a3c18',
    fontSize: 13,
    fontWeight: '700',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 10,
  },
  headerIconButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  balanceCard: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: -58,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: '#1747a2',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.14,
    shadowRadius: 28,
    elevation: 12,
  },
  balanceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  balanceLabel: {
    color: '#7e8ca1',
    fontSize: 12,
    fontWeight: '500',
  },
  currencyPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f9fd',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 5,
  },
  currencyDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  currencyDotBlue: {
    backgroundColor: '#2c7dff',
  },
  currencyDotRed: {
    backgroundColor: '#ff6f6f',
    marginLeft: -8,
  },
  currencyPillText: {
    color: '#334155',
    fontSize: 11,
    fontWeight: '700',
  },
  balanceAmount: {
    color: '#121826',
    fontSize: 35,
    fontWeight: '800',
    letterSpacing: -1,
    marginBottom: 16,
  },
  balanceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inlineAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  inlineActionText: {
    color: '#6c7b90',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    paddingTop: 74,
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 18,
  },
  contactsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  contactSearchButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#2c7dff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  contactsRow: {
    paddingRight: 8,
    gap: 16,
  },
  contactItem: {
    alignItems: 'center',
    width: 56,
    gap: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#2e2f33',
    fontSize: 11,
    fontWeight: '700',
  },
  avatarTextLight: {
    color: '#ffffff',
  },
  contactName: {
    color: '#3f4b60',
    fontSize: 12,
    fontWeight: '500',
  },
  quickActionsCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 18,
    justifyContent: 'space-between',
    shadowColor: '#123a7d',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 5,
  },
  quickActionItem: {
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  quickActionIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionLabel: {
    color: '#344256',
    fontSize: 12,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  sectionTitle: {
    color: '#161d2d',
    fontSize: 19,
    fontWeight: '800',
  },
  sectionLink: {
    color: '#2d7cff',
    fontSize: 13,
    fontWeight: '700',
  },
  transactionsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 26,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#173a76',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 5,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  transactionDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e7edf6',
  },
  transactionMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  transactionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionCopy: {
    gap: 3,
  },
  transactionTitle: {
    color: '#1e2431',
    fontSize: 15,
    fontWeight: '700',
  },
  transactionDate: {
    color: '#96a1b1',
    fontSize: 12,
    fontWeight: '500',
  },
  transactionAmount: {
    color: '#202636',
    fontSize: 15,
    fontWeight: '800',
  },
});
