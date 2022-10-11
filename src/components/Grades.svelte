<script>
    import grades from "./../data/grading.csv"
    import content from "./../data/copy.json"
    import Icon from "../components/helpers/Icon.svelte"
    import Grade from "../components/helpers/Grade.svelte"
    import {Container,Row,Col,TabContent, TabPane,Spinner,Accordion,AccordionHeader,AccordionItem} from 'sveltestrap'
    import { fetchGoogle } from "../actions/refreshData.js";
    import inView from '../actions/inView.js'
   let open = false;
   let loading = true;   
   let filteredData = grades;
   let filter1 = 'all';
   export let cat = 'Consumer';

   function filterGrid () {
       loading = true;
       //fetchGoogle().then(function(result) {
            filteredData = grades.filter(function (i,n) {
                return i.Category.indexOf(cat) > -1;
            });

            if (filter1 != 'all') {
                filteredData = filteredData.filter(function (i,n) {
                    return i.Subcategory.indexOf(filter1) > -1;
                });
            }

            filteredData
        //});
       loading = false;
   }
   filterGrid();
   
   
</script>

{#if loading}

   <div id="spinner">
       <Spinner color=light/>
   </div>

{:else}

<Container>
     {#if cat == 'Supplier' }
     <Row>
        <Col sm=12 lg={{size:6,offset:3}}>
            <div class="control">
                    <label for="cat">Filter by type of supplier:</label>
                    <!-- svelte-ignore a11y-no-onchange -->
                    <select bind:value={filter1} on:change="{() => filterGrid()}" name="supplier_type" id="supplier_type">
                         <option value="all">All</option>
                        <option value="Semiconductor">Semiconductor</option>
                        <option value="Display">Display Manufacturing</option>
                        <option value="Assembly">Final Assembly</option>
                    </select>
            </div> 
        </Col>
    </Row>
     {/if}
       <Row>
           <Col sm=12 md=12 lg={{size:10,offset:1}}>
              <div class="grades">
                <div class="rows">
                    <Container>
                        <div id="grade_header">
                            <Row>
                                <Col sm=8 md=8 lg=8>
                                    <p style="padding-left:20px;">Company Name</p>
                                </Col>
                                <Col sm=4 md=4 lg=4>
                                    <div id="overall"><p>Grade</p></div>
                                    <div id="ratio"><p>Claimed RE Ratio</p></div>
                                </Col>
                            </Row>
                        </div>
                        <Accordion>
                            {#each filteredData as company}
                            <AccordionItem>
                                <div slot="header" class="acc_header">
                                    <Row>
                                        <Col sm=2 md=2 lg=2>
                                            <div class="logo">
                                                <img src="assets/logos/lenovo.png">
                                            </div>
                                        </Col>
                                        <Col sm=6 md=6 lg=6>
                                            <h4>{company['Company Name']}</h4>
                                        </Col>
                                        <Col sm=2 md=2 lg=2>
                                            <div class="grade">
                                                <Grade gradeDetail={company['Overall Grade']} grade={company['Overall Grade'].charAt(0)} />
                                            </div>
                                        </Col>
                                        <Col sm=2 md=2 lg=2>
                                            <p>{company['Claimed Renewable Energy Ratio']}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div class="acc_body">
                                    <p>{company['Summary (<100 words)']}</p>
                                    <div class="suppliers_list">
                                        {#if cat == 'Consumer'}
                                        <h4>Suppliers:</h4>
                                        {:else}
                                        <h4>Supplies:</h4>
                                        {/if}
                                         <p>{company['Connections']}</p>
                                    </div>
                                </div>
                            </AccordionItem>
                            {/each}
                        </Accordion>
                    </Container>
                </div>
              </div>
           </Col>  
       </Row>
   </Container>

{/if}


<style>

#spinner {
   width:100%;
   height:200px;
   margin-top:10%;
   text-align:center;
 }

 .grades {
    padding-bottom:100px;
 }
   
 .control {
    color:#fff;
    margin-top:30px;
 }

 .acc_header h4 {
    min-width:200px;
 }

 #grade_header p {
    font-style:italic;
    margin-top:30px;
    font-size:15px;
    color:#fff;
}

.logo img {
    max-height:150px;
}

#overall, #ratio {
    float:left;
}

#ratio {
    padding-left:35px;
}
</style>
