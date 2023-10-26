<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';
  import Tabs from './shared/Tabs.svelte';
  
  // tabs
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';
  const tabChange = (e) => activeItem = e.detail;

  const handleAdd = () => {
    activeItem = 'Current Polls';
  }

</script>

<Header />
<main>

	<p> Studio Ghibli, Inc. Japanese:<b>  株式会社スタジオジブリ</b>, is a Japanese animation studio based in Koganei, 
		Tokyo. It has a strong presence in the animation industry and has expanded its portfolio to include various media 
		formats, such as short subjects, television commercials, and two television films.</p>

  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>