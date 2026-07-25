import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

// Hands-On 7 Task 2: CanDeactivate Guard preventing accidental loss of unsaved form data
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.canDeactivate ? !component.canDeactivate() : false) {
    return window.confirm('You have unsaved changes. Are you sure you want to leave?');
  }
  return true;
};
