/*
 * Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Setting-up global variables.
 */
var appBar = '.app-bar',
    viewPanel = '.view-panel',
    appBarHeight = $(appBar).height();

/*
 * On window loaded functions.
 */
$(window).load(function(){
    setViewPanelsHeight();
});

/*
 * On window resize functions.
 */
$(window).resize(function(){
    setViewPanelsHeight();
});

/*
 * On main div.container resize functions.
 * @required  jquery.resize.js
 */
$('.container-fluid').resize(function(){
    setViewPanelsHeight();
});

/*
 * Set view panels height relatively to the window
 */
function setViewPanelsHeight(){
    if($(window).width() > 768){
        $(viewPanel).css('height', ($('body').height() - appBarHeight));
    }
    else{
        $(viewPanel).css('height', 'auto');
    }
    $('.CodeMirror-merge, .CodeMirror-merge .CodeMirror').height(($(viewPanel).height()-60));
}