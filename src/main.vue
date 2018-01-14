<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Left Panel -->
		<f7-panel left reveal>
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Left Panel"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-list accordion>
							<f7-list-item accordion-item title="Accordion Item 1">
								<f7-accordion-content>
									<f7-block>
										<p>Accordion Item 1 Content</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex.
											Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare
											efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus
											commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
									</f7-block>
								</f7-accordion-content>
							</f7-list-item>
							<f7-list-item accordion-item title="Accordion Item 2">
								<f7-accordion-content>
									<f7-block>
										<p>Accordion Item 2 Content</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex.
											Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare
											efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus
											commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
									</f7-block>
								</f7-accordion-content>
							</f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Right Panel"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-list>
							<f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
							<f7-list-item title="Item 2" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
							<f7-list-item title="Item 3" subtitle="Subtitle 3" text="Item 3 Text"></f7-list-item>
							<f7-list-item title="Item 4" subtitle="Subtitle 4" text="Item 4 Text"></f7-list-item>
							<f7-list-item title="Item 5" subtitle="Subtitle 5" text="Item 5 Text"></f7-list-item>
							<f7-list-item title="Item 6" subtitle="Subtitle 6" text="Item 6 Text"></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar back-link="Back">

					<f7-nav-center sliding>Graphify</f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<f7-toolbar tabbar swipeable bottom labels>
					<f7-link tab-link="#tab1" text="Home">
						<f7-icon f7="home_fill"></f7-icon>
					</f7-link>
					<f7-link tab-link="/graphcms" text="Photos">
						<f7-icon f7="photos_fill"></f7-icon>
					</f7-link>
					<f7-link tab-link="#tab1" text="About">
						<f7-icon f7="info_fill"></f7-icon>
					</f7-link>
					<f7-link tab-link="#tab1" text="More">
						<f7-icon f7="favorites_fill"></f7-icon>
					</f7-link>
				</f7-toolbar>
				<!-- Pages -->
				<f7-pages>
					<f7-page>
						<f7-block-title>Welcome to Graphify</f7-block-title>
						<f7-block inner>
							This is a demo Phonegap app build with Framework7, Vue.js and the GraphCMS.
						</f7-block>
						<f7-block-title>Navigation</f7-block-title>
						<f7-list>
							<f7-list-item link="/graphcms/" title="Demo content from GraphCMS"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
							<f7-list-item link-open-panel link="left" title="Open Left Panel"></f7-list-item>
							<f7-list-item link-open-popup link="#popup" title="Open Popup"></f7-list-item>
							<f7-list-item link-open-login-screen link="#login-screen" title="Open Login Screen"></f7-list-item>
						</f7-list>


					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>

		<!-- Popup -->
		<f7-popup id="popup">
			<f7-view navbar-fixed>
				<f7-pages>
					<f7-page>
						<f7-navbar title="Popup">
							<f7-nav-right>
								<f7-link :close-popup="true">Close</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam,
							ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-popup>

		<!-- Login Screen -->
		<f7-login-screen id="login-screen">
			<f7-view>
				<f7-pages>
					<f7-page login-screen>
						<f7-login-screen-title>Login</f7-login-screen-title>
						<f7-list form>
							<f7-list-item>
								<f7-label>Username</f7-label>
								<f7-input name="username" placeholder="Username" type="text"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
								<f7-input name="password" type="password" placeholder="Password"></f7-input>
							</f7-list-item>
						</f7-list>
						<f7-list>
							<f7-list-button title="Sign In" close-login-screen></f7-list-button>
							<f7-list-label>
								<p>Click Sign In to close Login Screen</p>
							</f7-list-label>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-login-screen>

	</div>
</template>

<script>
	export default {
		name: 'app',
	}
</script>