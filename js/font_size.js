fontsize_paragraph = document.getElementById( 'fontsize' );
fontsize_paragraph.style.fontSize = "100%" ;

        var tsw_fontsize_font_is_large = false ;
function tsw_fontsize_change_font_size( )
{
  fontsize_paragraph = document.getElementById( 'fontsize' );
  if (!tsw_fontsize_font_is_large) {
    fontsize_paragraph.style.fontSize = "150%" ;
    tsw_fontsize_font_is_large = true ;
  }
  else {
    fontsize_paragraph.style.fontSize = "100%" ;
    tsw_fontsize_font_is_large = false ;
  }
}