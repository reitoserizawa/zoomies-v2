export type DashboardContentType = 'pet' | 'favoriteDogPark';

export interface AppState {
    isPetCreateFormModalOpen: boolean;
    isPetUpdateFormModalOpen: boolean;
    dogParkModalId?: number;
    dashboardContent: DashboardContentType;
}
