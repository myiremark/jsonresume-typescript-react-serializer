import React from 'react';

import { Resume }  from '../interfaces/resumejson';

import WorkExperiences from '../components/WorkExperiences';
import Awards from '../components/Awards';
import Volunteers from '../components/Volunteers';
import Header from '../components/Header';
import Educations from '../components/Educations';
import Skills from '../components/Skills';
import Publications from '../components/Publications';
import Basics from '../components/Basics';
import Languages from '../components/Languages';
import About from '../components/About';
import Interests from '../components/Interests';
import References from '../components/References';
import Projects from '../components/Projects';

interface State {
  resume: Resume;
}

interface Props {}

const defaultResumeState = {} as Resume;

class ResumePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        resume: defaultResumeState,
    };
  }

  async fetchData() {
    const url = '/resume.json';

    const respText = await fetch(url).then(e => e.json());
    const resume = respText as Resume;

    this.setState({ resume });
  }

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    const resume = this.state.resume;

    return (
        <div className="container">
            {resume && resume.basics && Header(resume)}
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              {resume && About(resume)}              
              {resume && resume.work && resume.work.length > 0 && WorkExperiences(resume.work)}              
              {resume && resume.awards && resume.awards.length > 0 && Awards(resume.awards)}              
              {resume && resume.volunteer && resume.volunteer.length > 0 && Volunteers(resume.volunteer)}             
              {resume && resume.publications && resume.publications.length > 0 && Publications(resume.publications)}           
            </div>
            <div className="col-xs-12 col-sm-5">
              {resume && resume.basics && resume.basics.profiles && Basics(resume)}             
              {resume && resume.education && resume.education.length > 0 && Educations(resume.education)}             
              {resume && resume.skills && resume.skills.length > 0 && Skills(resume.skills)}           
              {resume && resume.languages && resume.languages.length > 0 && Languages(resume.languages)}           
              {resume && resume.interests && resume.interests.length > 0 && Interests(resume.interests)}                         
              {resume && resume.references && resume.references.length > 0 && References(resume.references)}
              {resume && resume.projects && resume.projects.length >0 && Projects(resume.projects)}
            </div>
          </div>
        </div>
    );
  }
}

export default ResumePage;
