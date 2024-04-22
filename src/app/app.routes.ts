import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'\skills',component:SkillsComponent},
    {'path':'\projects',component:ProjectsComponent},
    {'path':'\about',component:AboutComponent},
    {'path':'\contacts',component:ContactsComponent}
];
