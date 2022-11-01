import { DetailJobsSkeleton } from '../templates/template-creator';

const jobsPage = {
  async render() {
    return `
        <div id="container-page-jobs">
            <search-bar></search-bar>
            <div class="container-jobs">
                <div class="item-jobs">
                    ${DetailJobsSkeleton(10)}
                </div>
                <div class="detail-jobs">
                    <div class="card">
                        <img src="./asset/hero-jobsDetail.png">
                        <p> Temukan pekerjaan sesuai dengan passion kamu </p>
                    </div>
                </div>
            </div>
        </div>
        `;
  },

};
export default jobsPage;
