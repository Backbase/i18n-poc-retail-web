export const PERMISSIONS = {
  canCreateA2A: 'Payments.A2ATransfer.create',
  canViewMyAccounts: 'ProductSummary.ProductSummary.view OR ProductSummary.ProductSummary.edit',
  canViewTransfers:
    'Payments.A2ATransfer.view OR Payments.SEPACT.view OR Payments.A2ATransfer.view OR Payments.SEPACT.view AND ProductSummary.ProductSummary.view',
  canViewMakeTransfer: 'Payments.A2ATransfer.view OR Payments.SEPACT.view AND ProductSummary.ProductSummary.view',
  canViewTransferToMember: 'Payments.A2ATransfer.view OR Payments.SEPACT.view AND ProductSummary.ProductSummary.view',
  canViewScheduledTransfers: 'Payments.A2ATransfer.view OR Payments.SEPACT.view',
  canViewTransactionsAnalytics: 'Transactions.Transactions.view',
  canViewSelfService:
    'ProductSummary.ProductSummary.view OR UserProfiles.ManageUserProfiles.view OR PersonalFinanceManagement.ManageCards.view OR AccountStatements.ManageStatements.view',
  canViewMyProfile: 'UserProfiles.ManageUserProfiles.view',
  canViewMessages:
    'MessageCenter.Messages.view AND MessageCenter.Messages.create AND MessageCenter.Messages.edit AND MessageCenter.Messages.delete',
  canViewManageCards: 'PersonalFinanceManagement.ManageCards.view',
  canViewManageContacts: 'Contacts.Contacts.view AND Contacts.Contacts.create',
  canViewAccountStatements: 'AccountStatements.ManageStatements.view',
  canViewManageStatements: 'AccountStatements.ManageStatements.view AND AccountStatements.ManageStatements.edit',
  canViewBudgets: 'PersonalFinanceManagement.ManageBudgets.view',
  canViewPlaces: 'PersonalFinanceManagement.Places.view',
  canViewManagePockets: 'PersonalFinanceManagement.ManagePockets.view',
  canViewManageNotifications:
    'ProductSummary.ProductSummary.view AND CommunicationPreferences.GeneralNotificationPreferences.view AND CommunicationPreferences.GeneralNotificationPreferences.create AND CommunicationPreferences.GeneralNotificationPreferences.edit',
  canViewLoans: 'ProductSummary.ProductSummary.view OR ProductSummary.ProductSummaryLimitedView.view',
  canViewRealTimeCommunicationChat: 'RealTimeCommunications.RTCSupportRequest.execute',
  canViewDashboard: 'ProductSummary.ProductSummary.view',
  canViewInsightsDashboard:
    'PersonalFinanceManagement.FinancialInsights.view OR PersonalFinanceManagement.ManageBudgets.view',
  canViewCashFlow: 'PersonalFinanceManagement.FinancialInsights.view',
  canViewMarketingPreferences:
    'CommunicationPreferences.GeneralNotificationPreferences.view AND CommunicationPreferences.GeneralNotificationPreferences.create AND CommunicationPreferences.GeneralNotificationPreferences.edit',
};
