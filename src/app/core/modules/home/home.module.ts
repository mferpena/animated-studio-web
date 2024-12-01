import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { HomeRoutingModule } from '../../router/home/home-routing.module';
import { CarouselComponent } from 'src/app/components/organisms/carousel/carousel.component';
import { FeaturedNewsCardComponent } from 'src/app/components/organisms/featured-news-card/featured-news-card.component';
import { ButtonViewMoreComponent } from 'src/app/components/atoms/button-view-more/button-view-more.component';
import { FeaturedImageComponent } from 'src/app/components/atoms/featured-image/featured-image.component';
import { FeaturedVideoComponent } from 'src/app/components/organisms/featured-video/featured-video.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CharactersComponent } from 'src/app/components/organisms/characters/characters.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ButtonViewMoreComponent,
    FeaturedImageComponent,
    FeaturedNewsCardComponent,
    ButtonViewMoreComponent,
    FeaturedVideoComponent,
    SafeUrlPipe,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
