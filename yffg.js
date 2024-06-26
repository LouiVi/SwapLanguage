var file = "demofile";

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var text = app.LoadText( "value", "My Value", file );
    edtValue = app.CreateTextEdit( text, .5 );
    lay.AddChild( edtValue );

    btnSave = app.CreateButton( "Save Value", 0.5, 0.1 );
    btnSave.SetOnTouch( btnSave_OnTouch );
    lay.AddChild( btnSave );

    btnLoad = app.CreateButton( "Load Value", 0.5, 0.1 );
    btnLoad.SetOnTouch( btnLoad_OnTouch );
    lay.AddChild( btnLoad );

    app.AddLayout( lay );
}

function btnSave_OnTouch()
{
    app.SaveText( "value", edtValue.GetText(), file );
    app.ShowPopup( "Value Saved." );
}

function btnLoad_OnTouch()
{
    var value = app.LoadText( "value", "no value stored", file );
    app.ShowPopup( value );
}