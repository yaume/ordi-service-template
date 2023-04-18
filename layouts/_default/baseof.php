<!DOCTYPE html>

<html lang="{{ .Site.LanguageCode }}">
{{- partial "head.html" . -}}


<body>
   
    {{- partial "nav.html" . -}}
    <main class="{{.Params.Class }}" id="main">
        {{- block "main" . }}{{- end }}
    </main>
    {{- partial "footer.html" . -}}
</body>

</html>