<!-- src/routes/+layout.svelte -->
<script>
    import { base } from '$app/paths';
</script>

<nav>
    <div class="nav-container">
        <a href="{base}/" class="nav-logo" title="Back to Homepage">Charlotte Philibert</a>
        <div class="nav-links">
            <a href="{base}/about" class="link">About</a>
            <a href="{base}/projects" class="link">Projects</a>
            <a href="{base}/resume" class="link">Resume</a>
        </div>
    </div>
 </nav>
 
<div class="container">
<!-- Pages will be injected below -->
    <slot></slot>
</div>
 
 <style>
     .container {
        max-width: 1400px;
        margin: 50px auto;
        background-size: cover;
    }
 </style>