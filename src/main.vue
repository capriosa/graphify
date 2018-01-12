<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Left Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Left Panel"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block inner>
							<p>Left panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/graphcms/" title="Demo content from GraphCMS"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/graphcms/" title="Demo content from GraphCMS" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Right Panel" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block>
							<p>Right panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/grapcms/" title="Demo content from GraphCMS"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/graphcms/" title="Demo content from GraphCMS" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
					</f7-nav-left>
					<f7-nav-center sliding>Graphify</f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<f7-toolbar tabbar swipeable bottom labels>
					<f7-link tab-link="#tab1" text="Home"><f7-icon f7="home_fill"></f7-icon></f7-link>
					<f7-link tab-link="#tab1" text="Photos"><f7-icon f7="photos_fill"></f7-icon></f7-link>
					<f7-link tab-link="#tab1" text="About"><f7-icon f7="info_fill"></f7-icon></f7-link>
					<f7-link tab-link="#tab1" text="More"><f7-icon f7="favorites_fill"></f7-icon></f7-link>
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
						</f7-list>
						<f7-block-title>Side Panels</f7-block-title>
						<f7-block>
							<f7-grid>
								<f7-col width="50">
									<f7-button open-panel="left">Left Panel</f7-button>
								</f7-col>
								<f7-col width="50">
									<f7-button open-panel="right">Right Panel</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
						<f7-block-title>Modals</f7-block-title>
						<f7-block>
							<f7-grid>
								<f7-col width="50">
									<f7-button open-popup="#popup">Popup</f7-button>
								</f7-col>
								<f7-col width="50">
									<f7-button open-login-screen="#login-screen">Login Screen</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
						
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
	export default {}
</script>