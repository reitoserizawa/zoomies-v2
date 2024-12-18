export type DashboardContentType = 'pet' | 'favoriteDogPark' | 'recentDogParkCheckIn';

export interface AppState {
    isPetCreateFormModalOpen: boolean;
    isPetUpdateFormModalOpen: boolean;
    dogParkModalId?: number;
    dashboardContent: DashboardContentType;
}
