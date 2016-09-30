# This script triggers tests on appropriate codeline (passed from command line)

function invoke_plan()
{
curl -X POST --user dzakharov:bamboo -d bamboo.variable.CODELINE=$CODELINE  bamboo.variable.BRANCH=$BRANCH http://app-bamboo/rest/api/latest/queue/${1}?os_authType=basic
}

invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEUNITBIEBER
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEUNITBIEBERLR
#this one below is actually CURRENT
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEUNITHAMMER
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEUNITREALHAMMER
invoke_plan SOLUTIONSSA-SOLNESSSATHREATINTELLIGENCEUNITHAMMERLR

invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEFUNCTIONALBIEBER
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEFUNCTIONALBIEBERLR
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEFUNCTIONALCURRENT
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEFUNCTIONALHAMMER
invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEFUNCTIONALHAMMERLR

invoke_plan SOLUTIONSSA-SOLNSATHREATINTELLIGENCEJSLINT
