<script>
    export let left_spacing = "310";
    export let color = "var(--white)";
    export let orientation = "triangle";
  </script>

{#if orientation == "triangle"}
  {#if left_spacing == '50'}
    <div class="arrow-down" style="--boundary-color: {color};margin:auto;"></div>  
  {:else}
    <div class="arrow-down" style="--boundary-color: {color};--left-spacing: {left_spacing}%;"></div>  
  {/if}
{:else}
    <div class="overlay" style="--boundary-color: {color}; --left-spacing: {left_spacing}%;--right-spacing: {left_spacing-2}%;--right-spacing-mobile: {left_spacing-5}%;"></div>
{/if}


  <style>

    .arrow-down {
        width: 0; 
        height: 0; 
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        z-index: var(--z-top);
        border-top: 35px solid var(--boundary-color);
        margin-left: var(--left-spacing);
    }
  
    .overlay { position: relative; height:50px; top:-45px; bottom:0px;overflow:hidden;}
    
    @media (min-width:741px) {
        .overlay:after,  .overlay:before { content: ''; display: block; height: 50px; background: var(--boundary-color); position: absolute; bottom: 0;}
        .overlay:before { width: var(--left-spacing); left: -50px; -ms-transform: skewX(40deg); -webkit-transform: skewX(40deg); transform: skewX(40deg); }
	.overlay:after { width: 100%; left: var(--right-spacing); -ms-transform: skewX(-40deg); -webkit-transform: skewX(-40deg); transform: skewX(-40deg); overflow:hidden; }
    }

    @media (max-width:741px) {
	    .overlay:after,  .overlay:before { content: ''; display: block; height: 50px; background: var(--boundary-color); position: absolute; bottom: 0;}
        .overlay:before { width: var(--left-spacing); left: -50px; -ms-transform: skewX(40deg); -webkit-transform: skewX(40deg); transform: skewX(40deg); }
	.overlay:after { width: 100%; left: var(--right-spacing-mobile); -ms-transform: skewX(-40deg); -webkit-transform: skewX(-40deg); transform: skewX(-40deg); }
    }


  
  </style>
  