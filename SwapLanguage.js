var langJson = `
{
    "langs": [ "English", "Español" ],
    "codes": { "english":"en", "español":"es" },
    "trans" : {
        "SelectLang" : {
            "en":"Please select your prefered language from the 'Settings' menu",
            "es":"Selecciona tu idioma preferido en el menú 'Configuración'"
        }
    }
}`;

function OnStart()
{
		var lang = app.LoadText( "language", "Español", "lang.data" );
    app.WriteFile( "lang.json", langJson );
    app.SetAppLanguage( lang );

    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lay.Animate( /* "ZoomInEnter"*/"NewsPaper", null, 1500)
	//app.LoadText(  )
    //app.DestroyLayout( lay );
 
    spinLang = app.CreateSpinner( "-- Choose --,English,Español", 0.4 );
    spinLang.SetOnChange( spinLang_OnChange );
    lay.AddChild( spinLang );

    app.AddLayout( lay );

    app.ShowPopup(T( "SelectLang" ));
}

function spinLang_OnChange()
{
    language = spinLang.GetText();
    app.SaveText( "language", language, "lang.data" );
    app.SetAppLanguage( language );
		lay.Animate(  "ZoomOutExit", null, 2500)
    app.DestroyLayout( lay );
    OnStart();
}