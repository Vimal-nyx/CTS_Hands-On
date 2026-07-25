import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  // Hands-On 2 Task 1: Component properties
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  // Hands-On 2 Task 2: ngOnInit Lifecycle Hook
  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
  }

  // Hands-On 2 Task 2: ngOnDestroy Lifecycle Hook
  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  // Hands-On 2 Task 1: Event Binding Handler
  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}
