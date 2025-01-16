export type DashboardContentType = 'pet' | 'favoriteDogPark' | 'recentDogParkCheckIn' | 'profileSettings';

export interface AppState {
    isPetCreateFormModalOpen: boolean;
    isPetUpdateFormModalOpen: boolean;
    dogParkModalId?: number;
    dashboardContent: DashboardContentType;
    isChangePasswordModalOpen: boolean;
    isMobileNavOpen: boolean;
}
