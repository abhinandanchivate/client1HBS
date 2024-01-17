import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HbsService } from './services/hbs.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  providers: [HbsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'client';
  navbarTemplate: SafeHtml = '';

  constructor(
    private hbsService: HbsService,
    private domsanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.hbsService.getNavbar().subscribe(
      (res) => {
        this.title = 'hello';
        console.log(this.title);
        console.log(this.domsanitizer.bypassSecurityTrustHtml(res));
        this.navbarTemplate = this.domsanitizer.bypassSecurityTrustHtml(res);
        console.log(this.navbarTemplate);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
