<script>
  import wordmark from "$svg/stand/logo_white.svg";
  import Boundary from "../helpers/Boundary.svelte";

  const links = [
    { name: "about", url: "https://stand.earth/about-us" },
    { name: "facebook", url: "https://facebook.com/standearth/" },
    { name: "twitter", url: "https://twitter.com/standearth/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/stand.earth",
    }
  ];


</script>

<footer> 
  <section class="about">
    <div class="wordmark">
      <span class="s">
        <a href="https://stand.earth" target="_new">{@html wordmark}</a>
      </span>
      <span class="greenpeace">
        <a href="https:/greenpeace.org/" target="_new"><img src="assets/greenpeace.png" alt="Greenpeace"></a>
      </span>
      <p><a href="https://stand.earth">Stand.earth</a> is an advocacy organization that brings people together to demand that corporations
        and governments put people and the environment first.
    </p>
  </section>
  <section class="links">
    <ul>
      {#each links as link}
        <li>
          <a href="{link.url}">
            <!-- TODO icon -->
            <span>{link.name.toUpperCase()}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</footer>

<style>
  footer {
    background-color: var(--gray-light);
    color: var(--stand-tertiary);
    font-family: var(--sans);
    padding-top: 0px;
    padding-bottom: 1em;
  }


  footer p {
    max-width:800px;
    margin-left:auto;
    margin-right:auto;
  }



  a,
  a:visited,
  a:hover {
    color: var(--stand-tertiary);
    text-decoration:none;
  }

  .wordmark {
    max-width: 600px;
    padding: 1em;
    margin:auto;
  }

  .wordmark .greenpeace, .wordmark .s {
    width:200px;
    height:60px;
  }

  .greenpeace img {
    width:200px;
    display:inline;
    margin-left:20px;
    margin-top:5px;
  }

  .about {
    margin: 3rem auto;
    margin-top: 0;
    text-align: center;
  }

  .links ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .links li {
    display: flex;
    padding: 0.5em 1em;
  }

  .links a {
    display: flex;
    border: none;
    align-items: center;
    text-decoration: none;
  }

  .links span {
    margin-left: 0.5em;
  }

  @media only screen and (min-width: 30em) {
    .story {
      width: 50%;
      padding: 0 1em;
    }
  }

  @media only screen and (min-width: 50em) {
    .story {
      width: 25%;
      padding: 0 1em;
    }
  }
</style>
