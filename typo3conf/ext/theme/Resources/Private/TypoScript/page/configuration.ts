
# **********************************************************
# General configuration of a page
# **********************************************************

page {
	meta.viewport = width=device-width, initial-scale=1.0

	# page.config overrides default settings from indexed_search/ext_typoscript_setup.txt
	config {
		index_enable = 1
		index_externals = 1
	}
}

config {
	doctype = html5
	xmlprologue = none
	xhtml_cleaning = all
	disablePrefixComment = 1
	meaningfulTempFilePrefix = 100

	admPanel = {$plugin.theme_configuration.general.adminPanel}

	# Language settings
	sys_language_uid = {$plugin.theme_configuration.site.languageUid}
	sys_language_mode = {$plugin.theme_configuration.site.languageMode}
	language = {$plugin.theme_configuration.site.language}
	locale_all = {$plugin.theme_configuration.site.locale}
	htmlTag_langKey = {$plugin.theme_configuration.site.htmlTagLanguageKey}

	# remove inline CSS/JS to external
	removeDefaultJS = 1
	inlineStyle2TempFile = 1
	removeDefaultCss = 1
	removePageCss = 1
	compressJs = 0
	compressCss = 0
	concatenateJs = {$plugin.theme_configuration.assets.merge}
	concatenateCss = {$plugin.theme_configuration.assets.merge}

	# RealURL
	simulateStaticDocuments = 0
	baseURL = {$plugin.theme_configuration.url}
	absRefPrefix = {$plugin.theme_configuration.url}
	tx_realurl_enable = {$plugin.theme_configuration.extensions.realurl}
	prefixLocalAnchors = all
	prefixLocalAnchors >

	# Spam
	spamProtectEmailAddresses = -2
	spamProtectEmailAddresses_atSubst = <span class="obfuscate-mid"> [AT] </span>
	spamProtectEmailAddresses_lastDotSubst = <span class="obfuscate-end"> [DOT] </span>

	# check for valid L-params
	linkVars = L(0-50)

	# Links & content sharing across domains
	typolinkEnableLinksAcrossDomains = 1
	typolinkCheckRootline = 1
	content_from_pid_allowOutsideDomain = 1

	# Cache
	cache_period = 1200
	sendCacheHeaders = 1

	headerComment (
####################################################################################
#                                                                                  #
#                                TYPO3.CMS base                                    #
#                                                                                  #
####################################################################################
	)


}
