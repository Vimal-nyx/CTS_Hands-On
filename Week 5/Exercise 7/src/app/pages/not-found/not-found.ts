import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div style="text-align: center; padding: 4rem 2rem; max-width: 600px; margin: 2rem auto;" class="glass-card">
      <h1 style="font-size: 4rem; color: #ef4444; margin-bottom: 0.5rem;">404</h1>
      <h2 style="margin-bottom: 1rem;">Page Not Found</h2>
      <p style="color: #94a3b8; margin-bottom: 2rem;">The requested page does not exist or has been moved.</p>
      <a routerLink="/" style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Return to Home</a>
    </div>
  `
})
export class NotFoundComponent {}
