<script>
  import Meta from "./Meta.svelte"
  import Grades from "./Grades.svelte"
  import Header from "./stand/Header.svelte"
  import Icon from "./helpers/Icon.svelte"
  import Footer from "./stand/Footer.svelte"
  import content from "$data/copy.json"
  import { page } from '$app/stores';
  import {fade,fly} from 'svelte/transition';
  import {Container,Row,Col,TabContent,TabPane,Button} from 'sveltestrap'
  import viewport from "$stores/viewport.js"
  import Boundary from "../components/helpers/Boundary.svelte"
  let url_string = "https://act.stand.earth/page/43909/survey/1?";
</script>

<Meta />

<section class="cover" style="height:{$viewport.height-8}px;background-image:url('assets/bg_it.jpeg')">
  <div class="overlay">
    <Header />
    <div class="cover-content">
    </div>
  </div>
</section>

<section class="intro" style="margin-top:-{$viewport.height/2.5}px;">
  <Container>
    <Row>
      <Col sm=12 md=8 lg=8>
        <h1>{content.Title}</h1>
        <h3>{content.Intro}</h3>
      </Col>
      <Col sm=12 md=4 lg=4>
        <div class="primary-nav">
          <a href="#grading">SEE RANKINGS</a>
          <a href="#action">TAKE ACTION</a>
          <a href="#download">DOWNLOAD PDF</a>
          <div class="social-share">
            <a target="_new" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fpublications.stand.earth%2Fsupply-change"><button class="facebook"><Icon name="facebook" stroke="var(--white)" stroke-width=2 width="30" /></button></a>
            <a target="_new" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpublications.stand.earth%2Fsupply-change%2F&via=standearth"><button class="twitter"><Icon name="twitter" stroke="var(--white)" stroke-width=2 width="30"/></button></a>
          </div>
      </div>
      </Col>
    </Row>
</Container>
</section>



<div class="summary" style="background-image:url('assets/summary_bg.jpeg');">
  <div class="overlay">
    <Container>
      <Row>
      <Col sm=12 md=6>
        <h2>{content.Summary.Heading}</h2>
            <p>{content.Summary.Content}</p>
      </Col>
    </Row>
  </Container>
  </div>
</div>  

<section class="grading">
  <Container>
    <Row>
      <Col sm=12 md={{size:8, offset:2}}>
        <h2>{content.Grading.Heading}</h2>
        <p>{content.Grading.Intro}</p>
      </Col>
    </Row>
  </Container>
  <div class="navigation">
    <!-- svelte-ignore a11y-missing-content -->
    <a name="grading"></a>
    <!-- svelte-ignore a11y-missing-content -->
    <TabContent pills>
      <TabPane tabId="consumer" active>
        <span slot="tab">
          <h3>CONSUMER BRANDS</h3>
        </span>
        <div class="brands">
          <Container>
            <Row>
              <Col sm=12>
                <Grades cat="Consumer"/>
                
              </Col>
            </Row>
          </Container>
          
        </div>
      </TabPane>
      <TabPane tabId="suppliers">
        <span slot="tab">
          <h3>ELECTRONICS SUPPLIERS</h3>
        </span>
        <div class="suppliers">
          <Container>
            <Row>
              <Col sm=12>
                
                <Grades cat="Supplier" />
              </Col>
            </Row>
          </Container>
          
        </div>
      </TabPane>
    </TabContent>
  </div>
</section>

<div class="report">
  <Container>
    <Row>
    <Col sm=12 md=8 lg=6>
      <a target="_new" href="https://www.stand.earth/sites/stand/files/tall_talk_final.pdf">
        <div class="report-cover">
          <img src="assets/report_cover.jpg">
        </div>
      </a>
    </Col>
    <Col sm=12 md=4 lg=6>
      <h2>{content.Download.Heading}</h2>
      <p>{content.Download.Intro}</p>
        <a target="_new" href="https://www.stand.earth/sites/stand/files/tall_talk_final.pdf"><h3>Download the Report <Icon name="download" stroke="var(--stand-primary)" stroke-width=2 width="40" /></h3></a>
    </Col>
  </Row>
</Container>
</div>  

<div class="action" style="background-image:url('assets/action_bg.jpeg');">
  <Container>
    <Row>
    <Col sm=12 md=6>
      <h2>
        {content.Action.Heading}
      </h2>
      <p>{content.Action.Intro}</p>
      <a href="https://stand.earth"><div class="button"><Button color=primary>TAKE ACTION</Button></div></a>
    </Col>
  </Row>
</Container>
</div>  




<Footer />


<style>
  .cover, .action, .summary { 
          background-position:cover;
          width:100%;
          min-width:200px;
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover;
      }


 
  .action {
    padding-top:150px;
    padding-bottom:150px;
    color:#fff;
    
  }

  .button {
    font-family:Gotham;

  }
  .image {
    padding:100px;
    text-align:center;
  }

  .grading {
    padding-top:50px;
  }

  .grading h3 {
    font-family:'Gotham'
  }

  .suppliers, .brands {
    background:var(--stand-primary);
  }

  .cover .overlay {
    width:100%;
    height:100%;
    background:linear-gradient(rgba(18, 138, 18, 0.0),rgba(255,255,255,1));
  }

  .summary .overlay {
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    padding-top:150px;
    padding-bottom:150px;
    color:#fff;
  }


  .cover-content {
      padding-top:40%;
  }

  #bdry-left {
    width:50%;
    float:left;
    margin-top:-10px;
  }
  #bdry-right {
    width:50%;
    float:right;
    margin-top:-10px;
  }



  @media (max-width:530px) {
    #bdry-left,#bdry-right {
      display:none;
    }


  }


  .intro {
    padding-bottom:150px;
  }

  .signup {
    padding-top:40px;
    text-align:center;
  }

  .primary-nav {
    font-size:20px;
    padding-top:60px;
    text-align:right;
  }

  @media (max-width:766px) {
    .primary-nav {
      padding-top:30px;
    }

    .cover .overlay {
    width:100%;
    height:100%;
  }
  }

  .primary-nav a {
    display:block;
    width:100%;
    color:var(--stand-primary);
    text-transform:uppercase;
    text-decoration:underline;
    font-family:'Gotham';
    padding-bottom:10px;
  }

  .primary-nav a:hover {
    text-decoration:none;
  }

  #summary-content p {
    padding-left:30px;
  }

  .social-share {
    margin-top:20px;
    text-align:right;
    }

  .social-share a {
    display:inline;
  }

  .social-share button {
    padding:2px 10px 5px 10px;
    border-radius:50%;
  }


  button.facebook {
      background:#4267B2;
      font-size:30px;
  }
    button.twitter {
        background:#1DA1F2;
        font-size:30px;
    }

    button:hover {
        background:var(--stand-secondary);
    }


    #form-wrap .inner_wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 992px) {
      #form-wrap {
          min-height: 1300px !important;
          clear:both;
      }
    }

    #form-wrap {
      width:100%;
      clear: both;
      position: relative;
      min-height: 1300px;
      overflow: hidden;
      display: block;
    }


    .report {
  width:100%;
  padding-top:50px;
  text-align:center;
  margin-bottom:50px;
}

.report h2 {
  padding-top:50px;
  padding-bottom:20px;
  margin:auto;
}

    .report-cover {
  max-width:250px;
  width:100%;
  margin:auto;
}

.report-cover {
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  margin: 26px auto 0;
  max-width: 550px;
  min-height: 300px;
  padding: 24px;
  position: relative;
  width: 80%;
}
.report-cover:before, .report-cover:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.report-cover:before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
.report-cover:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}

.report a {
  text-decoration:none;
  max-width:550px;
  color:var(--stand-primary);
}

</style>