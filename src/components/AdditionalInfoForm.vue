<template>
    <div>
        <h2>Preencha os dados abaixo para entendermos mais sobre a sua organização.</h2>

        <form action="">
            <FormulateInput 
            type="checkbox"
            label="Linguagens de Programação *"
            :options="['Delphi', 'Visual Basic', 'C#', 'PHP', 'Java', 'Outras', 'Nenhuma']"
            name="linguagensProgramacao"
            validation="required"
            />

            <FormulateInput 
            type="text"
            placeholder="Separe as linguagens por vírgula. Ex: Go, Lua, .NET"
            name="outrasLinguagens"
            />

            <FormulateInput
            type="checkbox"
            label="Ramo de atividade *"
            name="ramoAtividade"
            :options="['Varejo', 'Industria', 'Comércio', 'Transporte', 'Serviço']"
            />
        </form>
    </div>
</template>

<script>
export default {
    name: "additionalInfo",
}
</script>

<style>

</style>