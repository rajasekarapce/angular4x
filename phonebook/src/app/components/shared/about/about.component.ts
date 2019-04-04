import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>
    Founded in 2010, Shasta is head quartered at Chennai, India. Apart from its core expertise in building Mobile, Web Applications, Business Intelligence and Analytics it is also a leading contender for Workflow enablement through Sales Force. Shasta has forayed into open source based products development. Product portfolio includes GIS explorer that helps Location based, inter-active decision making, Secured Document sharing utility, Easy to use Reports and Dashboard Builder, highly collaborative workflow based issue management system and so on.   It currently employs over 60 plus developers across all these disciplines.

    We build applications with a focus on ease of use, responsiveness, security, scalability, reliability and cost-effectiveness using the latest cutting-edge technologies and frameworks that are widely practiced under the agile methodology.
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}
