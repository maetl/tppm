$(document).ready(function(){
    
    /**
     * Transforms string from given text into URI friendly format
     */
    function toUrlName(str) {
        return str.toLowerCase().replace(/&/, 'and').replace(/(\s|_)+/g,'-').replace(/[^a-z0-9\-]/g,'').replace(/(\-)+/g, '-').replace(/^((\-)+)/g, '').replace(/((\-)+)$/g, '');
    }

    /**
     * Activate editor panel
     */
    $(".tab-buttons a").click(function(){
        $('.tab-panel').hide();
        $($(this).attr('href')).show();
        return false;
    });
   
   /*$("#elm-title").keyup(function(){
       $("#elm-name").val(toUrlName($(this).val()));
   });*/
   	
   	/**
   	 * Hack for cross browser wrap of old style HTML file inputs
   	 */
   	$(".element-file-input").append("<div class=\"element-file-ext\"><input /><span class=\"element-bit-button\">Select a file</span></div>");
    
    /**
     * Ensure text field is updated when file is selected
     */
    $(".element-file-input input[type=file]").change(function(){
        elm = $(this).parent('.element-file-input').find('input[type=text]');
        elm.val($(this).val())
    });
    
    /**
     *
     */
     $(".element-files-expand .element-bit-button").click(function(){
         //$(".element-files").appendTo("<input type=\"file\" name=\"element_files[]\">");
         $(this).before("<div class=\"element-file-input\"><input type=\"file\" name=\"element_files[]\"></div>");
     });
    
   /**
    * Configure basic rich text editor.
    */
    $(".element-editor-basic textarea").ckeditor({ 
                            uiColor: '#eeeeee',
                            toolbar: [
                                    ['Undo', 'Redo', '-', 'Bold', 'Italic', '-', 'Link' ,'Unlink', '-', 'SpecialChar', '-', 'Source'],
                                    ['UIColor']
                                ]
                            });
    
    /**
     * Configure default rich text editor.
     */
     $(".element-editor textarea").ckeditor({ 
                             uiColor: '#eeeeee',
                             toolbar: [
                                     ['Undo','Redo'],
                                     ['Bold', 'Italic', 'Strike', '-', 'Blockquote', 'NumberedList', 'BulletedList'],
                                     ['Link' ,'Unlink', '-', 'SpecialChar'],
                                     ['PasteFromWord', 'RemoveFormat', '-', 'Source', '-', 'Maximize'],
                                     ['UIColor']
                                 ]
                             });
   
});